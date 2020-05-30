import { AuthService } from './auth.service';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  @Output() wsDisconnect: EventEmitter<any> = new EventEmitter();

  timerPromise = null;
  socketDisconnect = false;

  socketId: string;

  constructor(
    private socket: Socket,
    private auth: AuthService
  ) {
    if (this.auth.isUserLoggedIn()) {
      this.isAlive();
    }

    this.rxHeartBeat().subscribe((msg) => {
      console.log('Incoming heartbeat', msg);
      // cancel timer
      clearTimeout(this.timerPromise);

      if (this.getSocketId() !== msg.socket_id) {
        console.log('Socket id not same, send auth again');
        this.sendAuth();
      }

      // ckeck condition
      if (this.socketDisconnect) {
        this.sendAuth();
        this.socketDisconnect = false;
        this.wsDisconnect.emit(false);
      }

      // send again
      setTimeout(() => {
        this.isAlive();
      }, 3000);
    });

    this.rxMaster().subscribe((msg) => {
      console.log('Incoming master', msg);
      if (msg.cmd === 'socket-id') {
        this.setSocketId(msg.socket_id);
      }
    });
  }

  timmer() {
    this.timerPromise = setTimeout(() => {
      this.socketDisconnect = true;
      this.wsDisconnect.emit(true);
      console.log('Connection problem');
    }, 6000);
  }

  isAlive() {
    this.txHeartBeat();
    this.timmer();
  }

  setSocketId(id) {
    this.socketId = id;
  }

  getSocketId() {
    return this.socketId;
  }

  sendAuth() {
    const msg = { cmd: 'req-socket-id', type: 'master', master_id: this.auth.getMasterId() };
    this.socket.emit('kmaster', msg);
  }

  txHeartBeat() {
    const msg = { cmd: 'heartbeat', socket_id: this.getSocketId() };
    this.socket.emit('heartbeat', msg);
  }

  rxHeartBeat() {
    return this.socket.fromEvent<any>('heartbeat').pipe(map((data) => data));
  }

  rxMaster() {
    return this.socket.fromEvent<any>('kmaster').pipe(map((data) => data));
  }
}
