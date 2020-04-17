import { Component, OnInit, ViewChild } from '@angular/core';

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
  }];

  currentSubMenu = this.subMenuList[0];

  constructor() { }

  ngOnInit(): void {
  }

  routeTo(router) {
    this.snav.toggle();
    switch (router.route) {
      case 'KList':
          this.currentSubMenu = router;
          break;
      case 'upload':
          this.currentSubMenu = router;
          break;
      default:
          break;
    }
  }

}
