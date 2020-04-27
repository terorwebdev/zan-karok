import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  url = 'http://' + window.location.hostname + ':3004';

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  list(): any {
    return this.http.get(this.url + '/upload/list');
  }

  delete_file(data) {
    return this.http.post<any>(this.url + '/upload/delete', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  upload_file(formData) {
    return this.http
    .post(this.url + '/upload/fileUpload', formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  duration(inputPath) {
    return this.http.post<any>(this.url + '/upload/duration', JSON.stringify(inputPath), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  import(data) {
    return this.http.post<any>(this.url + '/upload/import', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
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
