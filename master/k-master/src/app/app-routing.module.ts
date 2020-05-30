import { PlayerComponent } from './layout/player/player.component';
import { ContentsComponent } from './layout/contents/contents.component';
import { UploadsComponent } from './layout/uploads/uploads.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const path = 'http://' + window.location.hostname + ':3003';
const config: SocketIoConfig = { url: path, options: {} };

const routes: Routes = [
  { path: '', component: ContentsComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'upload', component: UploadsComponent },
  { path: 'content', component: ContentsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SocketIoModule.forRoot(config)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
