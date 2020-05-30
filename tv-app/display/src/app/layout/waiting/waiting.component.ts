import { SettingService } from './../../services/setting.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.css']
})
export class WaitingComponent implements OnInit {

  server: string;
  playlerName: string;
  playerId: string;
  playerWs: string;
  playerLocal: string;

  constructor(private setting: SettingService) {
    this.server = this.setting.getServer();
    this.playlerName = this.setting.getPlayerName();
    this.playerId = this.setting.getId();
    this.playerWs = this.setting.getPlayerWs();
    this.playerLocal = this.setting.getPlayerLocal();
  }

  ngOnInit(): void {
  }

}
