import { Component, OnInit, Optional, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UploadService } from './../../../../services/upload.service';
//import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-import-modal',
  templateUrl: './import-modal.component.html',
  styleUrls: ['./import-modal.component.css'],
})
export class ImportModalComponent implements OnInit {
  song: any = {};
  url = 'http://' + window.location.hostname + ':3004/';
  importData: any = {};

  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    artist: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    album: new FormControl('NONE', [Validators.required]),
    language: new FormControl('', [Validators.required]),
    country: new FormControl('NONE', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    filename: new FormControl('', [Validators.required]),
    path: new FormControl('', [Validators.required]),
    extension: new FormControl('', [Validators.required]),
    sound: new FormControl('karaoke'),
  });

  constructor(
    private uploadService: UploadService,
    public dialogRef: MatDialogRef<ImportModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.importData = this.data;
    console.log('this.importData : ', this.importData);
  }

  ngOnInit(): void {
    // init form
    this.form.controls.title.setValue(this.importData.name.toUpperCase());
    this.form.controls.filename.setValue(this.importData.name);
    this.form.controls.path.setValue(this.importData.path);
    this.form.controls.extension.setValue(this.importData.extension);

    this.uploadService.duration(this.importData).subscribe((data) => {
      console.log(data);
      // init form
      this.form.controls.duration.setValue(data.data);
      this.form.controls.duration.disable();
    });
  }

  valuechange(newValue) {
    this.form.controls.title.setValue(newValue);
  }

  submit() {
    if (this.form.valid) {
      const toSend = {
        title: this.form.controls.title.value,
        artist: this.form.controls.artist.value,
        genre: this.form.controls.genre.value,
        album: this.form.controls.album.value,
        language: this.form.controls.language.value,
        country: this.form.controls.country.value,
        duration: this.form.controls.duration.value,
        extension: this.form.controls.extension.value,
        filename: this.form.controls.filename.value,
        path: this.form.controls.path.value,
        sound: this.form.controls.sound.value,
      };
      console.log(toSend);
      this.uploadService.import(toSend).subscribe((data) => {
        console.log(data);
      });
    }
  }

  cancel() {
    this.dialogRef.close({ event: 'Cancel', data: '' });
  }
}
