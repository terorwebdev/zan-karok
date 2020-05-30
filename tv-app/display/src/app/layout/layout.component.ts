import { SocketService } from './../services/socket.service';
import { SettingService } from './../services/setting.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(
    private router: Router,
    private socket: SocketService,
    private setting: SettingService) {
    }

  ngOnInit(): void {
    this.activate();
  }

  activate() {
    console.log(this.setting.getServer());
    if (this.setting.getServer() === undefined || this.setting.getServer() === null) {
      console.log('Server return undefined');
      this.router.navigate(['/login']);
    } else {

      this.socket.sendAuth();

      if (this.setting.getWaitingStatus() === undefined || this.setting.getWaitingStatus() === null) {
        console.log('Waiting confirmation');
        this.router.navigate(['/waiting']);
      } else {
        console.log(this.setting.getWaitingStatus());
        if (this.setting.getWaitingStatus() === 'true') {
          console.log('Waiting confirmation');
          this.router.navigate(['/waiting']);
        } else {
          console.log('Go to Home');
          this.router.navigate(['/home']);
        }
      }
    }
  }


  // get server

  // if getServer not undefined go to getWaitingStatus

  // if no id go to login

  // get player name

  // routing

}
