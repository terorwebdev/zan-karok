import { PlaylistService } from './playlist.service';
import { SettingService } from './setting.service';
import { SocketService } from './socket.service';
import { AuthService } from './auth.service';
import { LoginService } from './login.service';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [
    AuthService,
    SocketService,
    LoginService,
    SettingService
  ]
})
export class ServicesModule { }
