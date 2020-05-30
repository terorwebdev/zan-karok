import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor() { }

  setServer(server) {
    localStorage.setItem('server', server);
  }
  getServer() {
    return localStorage.getItem('server');
  }

  setPlayerName(player) {
    localStorage.setItem('player_name', player);
  }
  getPlayerName() {
    return localStorage.getItem('player_name');
  }

  setPlayerWs(ws) {
    localStorage.setItem('ws', ws);
  }
  getPlayerWs() {
    return localStorage.getItem('ws');
  }

  setPlayerLocal(local) {
    localStorage.setItem('local', local);
  }
  getPlayerLocal() {
    return localStorage.getItem('local');
  }

  setId(id) {
    localStorage.setItem('player_id', id);
  }
  getId() {
    return localStorage.getItem('player_id');
  }

  setWaitingStatus(status) {
    // 0 -> still waiting
    // 1 -> done waiting
    localStorage.setItem('waiting_status', status);
  }

  getWaitingStatus() {
    return localStorage.getItem('waiting_status');
  }

  reset() {
    localStorage.clear();
  }
}
