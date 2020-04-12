import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) {
    console.log('socket started');
    this.clientAuth();
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

  sendAuth(msg: any) {
    this.socket.emit('kclient-auth', msg);
  }

}
