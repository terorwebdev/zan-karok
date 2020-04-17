import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { MainComponent } from './layout/main/main.component';


const path = 'http://' + window.location.hostname + ':3003';
const config: SocketIoConfig = { url: path, options: {} };

const routes: Routes = [
  { path: '', component: MainComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SocketIoModule.forRoot(config),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
