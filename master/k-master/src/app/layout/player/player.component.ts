import { SocketService } from './../../services/socket.service';
import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

export interface PlayerList {
  player_name: string;
  player_id: string;
  registered: boolean;
  insert_date: number;
  update_date: number;
  online: boolean;
  is_selected: boolean;
}

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  playerlist: Array<PlayerList> = [];

  tablePlayerList: MatTableDataSource<PlayerList>;

  tableHeader: string[] = [
    'select',
    'player',
    'status',
    'occupied',
    'control'
  ];

  masterSelected: boolean;
  currentPlayerContent = [];

  constructor(
    private player: PlayerService,
    private socket: SocketService
    ) {

    }

  ngOnInit(): void {
    this.player.get_all_player().subscribe((response: any) => {
      if (response.result === 'success') {
        for (const item of response.data) {
          item.is_selected = false;
          item.online = false;
          this.playerlist.push(item);
        }
        this.player.get_player_online().subscribe((response2: any) => {
          if (response2.result === 'success') {
            const onlineList = response2.data;
            for (const item of this.playerlist) {
              const found = onlineList.find(element => element.player_id === item.player_id);
              if (found) {
                item.online = true;
              }
            }
          }
          console.log(this.playerlist);
          this.tablePlayerList = new MatTableDataSource<PlayerList>(this.playerlist);
          this.switchMenu('registered');
        });
      }
    });
  }

  selectMasterEvent() {
    console.log('Select All : ' + this.masterSelected);
    if (this.masterSelected) {
      for (const item of this.tablePlayerList.data) {
        item.is_selected = this.masterSelected;
        this.selectListContentEvent(item);
      }
    } else {
      for (const item of this.tablePlayerList.data) {
        item.is_selected = this.masterSelected;
        this.selectListContentEvent(item);
      }
    }
  }

  selectListContentEvent(content) {
    if (content.is_selected) {
      if (this.currentPlayerContent.length === 0) {
        this.currentPlayerContent.push(content);
      } else {
        const check = this.currentPlayerContent.find(
          item => item.filename === content.filename
        );
        if (check === undefined) {
          this.currentPlayerContent.push(content);
        }
      }
    } else {
      this.currentPlayerContent = this.currentPlayerContent.filter(
        item => item.filename !== content.filename
      );
    }
  }

  switchMenu(menu) {
    switch (menu) {
      case 'registered': {
        this.registeredPlayer();
        break;
      }
      case 'unregistered': {
        this.unregisteredPlayer();
        break;
      }
      case 'all': {
        this.allPlayer();
        break;
      }
      default: {
        console.log('undefined menu' + menu);
        break;
      }
    }
  }

  registeredPlayer() {
    this.tablePlayerList.data = this.playerlist.filter(item => {
      return item.registered === true;
    });
  }

  unregisteredPlayer() {
    this.tablePlayerList.data = this.playerlist.filter(item => {
      return item.registered === false;
    });
  }

  allPlayer() {
    this.tablePlayerList.data = this.playerlist;
  }

  approvePlayer(playerId: any) {
    console.log(playerId);
    this.socket.send_msg('approve_player', 'approve_player', playerId);
  }

}
