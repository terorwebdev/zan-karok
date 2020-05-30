import { SettingService } from './services/setting.service';
import { WaitingComponent } from './layout/waiting/waiting.component';
import { SettingComponent } from './layout/setting/setting.component';
import { LoginComponent } from './layout/login/login.component';
import { HomeComponent } from './layout/home/home.component';
import { PlayerComponent } from './layout/player/player.component';
import { CheckoutComponent } from './layout/checkout/checkout.component';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { Routes, RouterModule } from '@angular/router';

const server: SettingService = new SettingService();
const serverConfig: SocketIoConfig = { url: server.getPlayerWs(), options: {} };

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'waiting', component: WaitingComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SocketIoModule.forRoot(serverConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
