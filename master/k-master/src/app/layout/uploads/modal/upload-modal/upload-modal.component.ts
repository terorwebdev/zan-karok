import { Component, OnInit, Optional, Inject, ViewChild } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpEventType } from '@angular/common/http';
import { UploadService } from './../../../../services/upload.service';

@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.css']
})
export class UploadModalComponent implements OnInit {
  fileData: string[] = [];
  uploadId = 0;
  valueUploaded: any[] = [];
  isSuccess: any[] = [];
  uplodedSuccessFile = [];

  constructor(
    private uploadService: UploadService,
    public dialogRef: MatDialogRef<UploadModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  send() {
    const formData = new FormData();
    formData.append('file', this.fileData[this.uploadId]);
    this.uploadService.upload_file(formData).subscribe(events => {
      if (events.type === HttpEventType.UploadProgress) {
        console.log("uploadId: ", this.uploadId);
        console.log(
          "Upload progress: ",
          Math.round((events.loaded / events.total) * 100) + "%"
        );
        this.valueUploaded[this.uploadId] = Math.round(
          (events.loaded / events.total) * 100
        );
      } else if (events.type === HttpEventType.Response) {
        // console.log(events);
        if (events.status === 200) {
          // Upload success
          this.isSuccess[this.uploadId] = true;
          console.log('Upload Success : ', this.fileData[this.uploadId]);
          const check: any = events.body;
          console.log(check);
          this.nextUpload();
        } else {
          // Error upload
          this.isSuccess[this.uploadId] = false;
          console.log('Fail to upload : ', + this.fileData[this.uploadId]);
          this.nextUpload();
        }
      } else {
        console.log('Large File');
      }
    });
  }

  nextUpload() {
    this.uploadId++;
    if (this.uploadId < this.fileData.length) {
      this.send();
    } else {
      // Finish upload all files // Do something
      console.log('Finish upload all files');
    }
  }

  fileProgress(fileInput: any) {
    for (let i = 0; i < fileInput.target.files.length; i++) {
      this.fileData.push(fileInput.target.files[i]);
      console.log(this.fileData[i]);
    }
  }

  cancel() {
    this.dialogRef.close({ event: 'Cancel' , data:  this.uplodedSuccessFile});
  }

}
