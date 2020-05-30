import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  url = 'http://' + window.location.hostname + ':3000';

  constructor(private http: HttpClient) { }

  setMasterId(masterId) {
    sessionStorage.setItem('current_master_id', masterId);
  }

  getMasterId() {
    return sessionStorage.getItem('current_master_id');
  }

  login(username1, password1) {
    const data = {
      log_in : {
        username: username1,
        password: password1
      }
    };
    return this.http.post<any>(this.url + '/master/login', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('current_master_id');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('current_master_id');
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}
