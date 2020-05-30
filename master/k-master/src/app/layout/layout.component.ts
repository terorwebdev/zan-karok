import { AuthService } from './../services/auth.service';
import { SocketService } from '../services/socket.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  @ViewChild('snav', { static: false }) snav;

  subMenuList = [{
    id: 1,
    icon: '',
    route: 'KList',
    name: 'Karaoke List'
  },
  {
    id: 2,
    icon: '',
    route: 'upload',
    name: 'Upload'
  },
  {
    id: 3,
    icon: '',
    route: 'player',
    name: 'Player'
  }
];

  currentSubMenu = this.subMenuList[0];
  isLogIn = false;
  wsDisconnected = false;

  constructor(
    private router: Router,
    private socket: SocketService,
    private auth: AuthService) {
      if (this.auth.isUserLoggedIn()) {
        this.isLogIn = true;
      } else {
        this.isLogIn = false;
      }

      this.socket.wsDisconnect.subscribe(data => {
        this.wsDisconnected = data;
      });
    }

  ngOnInit(): void {
    if (this.auth.isUserLoggedIn()) {
      this.socket.sendAuth();
    }
  }

  routeTo(router) {
    this.snav.toggle();
    switch (router.route) {
      case 'KList':
          this.currentSubMenu = router;
          this.router.navigate(['/content']);
          break;
      case 'upload':
          this.currentSubMenu = router;
          this.router.navigate(['/upload']);
          break;
      case 'player':
        this.currentSubMenu = router;
        this.router.navigate(['/player']);
        break;
      default:
          break;
    }
  }

}
