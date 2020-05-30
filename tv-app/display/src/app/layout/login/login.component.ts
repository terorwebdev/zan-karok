import { SettingService } from './../../services/setting.service';
import { ConfirmModalComponent } from './../../modals/confirm-modal/confirm-modal.component';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    server: new FormControl('', [Validators.required]),
    ws: new FormControl('', [Validators.required]),
    local: new FormControl('', [Validators.required]),
    player_name: new FormControl('', [Validators.required]),
  });

  constructor(
    private auth: AuthService,
    private setting: SettingService,
    public dialog: MatDialog) {

    }

  ngOnInit(): void {

  }

  submit() {
    const playeritem = this.form.value;
    console.log(playeritem.server);
    let dialogRef = this.dialog.open(ConfirmModalComponent, {
      width: 'auto',
      height: 'auto',
      data: playeritem,
    });

    dialogRef.afterClosed().subscribe((result) => {
      const incoming = result;
      console.log(incoming);
      if (result.event === 'Confirm') {
        this.auth.login(playeritem.server, playeritem.player_name).subscribe((response) => {
           console.log(response);
           if (response.data.result === 'success') {
            const data = response.data.data;
            this.setting.setId(data.player_id);
            this.setting.setPlayerLocal(playeritem.local);
            this.setting.setPlayerName(data.player_name);
            this.setting.setPlayerWs(playeritem.ws);
            this.setting.setServer(playeritem.server);
            this.setting.setWaitingStatus(true);
           }
        });
      }
    });
  }

}
