import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  timerPromise = null;
  socketDisconnect = false;

  constructor(private socket: Socket) {
    //this.sendAuth();

    this.isAlive();

    this.rxHeartBeat().subscribe((msg) => {
      console.log('Incoming clientAuth', msg);
      // cancel timer
      clearTimeout(this.timerPromise);

      // ckeck condition
      if (this.socketDisconnect) {
        this.sendAuth();
        this.socketDisconnect = false;
      }

      // send again
      setTimeout(() => { this.isAlive(); }, 3000);
    });
  }

  timmer() {
    this.timerPromise = setTimeout(() => {
      this.socketDisconnect = true;
      console.log('Connection problem');
    }, 6000);
  }

  isAlive() {
    this.txHeartBeat();
    this.timmer();
  }

  check() {
    return this.socket
      .fromEvent<any>('kclient-auth')
      .pipe(map(data => data));
  }

  clientAuth() {
    return this.socket
      .fromEvent<any>('kclient-auth')
      .pipe(map(data => data));
  }

  clientMsg() {
    return this.socket
      .fromEvent<any>('kclient')
      .pipe(map(data => data));
  }

  sendMsg(msg: any) {
    this.socket.emit('kclient', msg);
  }

  sendAuth() {
    const msg = {cmd: 'req-auth', type: 'id', name: "test"};
    this.socket.emit('kclient-auth', msg);
  }

  txHeartBeat() {
    const msg = {cmd: 'heartbeat'};
    this.socket.emit('heartbeat', msg);
  }

  rxHeartBeat() {
    return this.socket
      .fromEvent<any>('heartbeat')
      .pipe(map(data => data));
  }

}
