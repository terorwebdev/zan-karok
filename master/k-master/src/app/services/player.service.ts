import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  url = 'http://' + window.location.hostname + ':3000';

  allPlayerList = [];

  constructor(private http: HttpClient) { }

  set_player(data) {
    this.allPlayerList = data;
  }

  get_player_registered() {}

  get_player_unregisterd() {}

  get_all_player() {
    return this.http.get(this.url + '/master/player_list');
  }

  get_player_online() {
    return this.http.get(this.url + '/master/player_list_online');
  }

}
