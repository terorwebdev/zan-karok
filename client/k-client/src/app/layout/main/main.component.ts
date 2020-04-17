import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private socket: SocketService) {
    this.socket.sendAuth();
  }

  ngOnInit(): void {
    this.socket.clientAuth().subscribe((msg) => {
      console.log('Incoming clientAuth', msg);
    });
  }
}
