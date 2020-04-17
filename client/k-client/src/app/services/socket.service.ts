import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) {
    //this.sendAuth();
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
