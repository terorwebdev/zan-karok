import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  submit() {
    const masterItem = this.form.value;
    if (this.form.valid) {
      this.auth.login(masterItem.username, masterItem.password).subscribe((response) => {
        console.log(response);
        if (response.data.result === 'success') {
          const data = response.data.data;
          this.auth.setMasterId(data.current_master_id);
          window.location.reload();
        }
     });
    }
  }

}
