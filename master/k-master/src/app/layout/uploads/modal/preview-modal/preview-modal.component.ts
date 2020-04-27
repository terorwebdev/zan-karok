import { Component, OnInit, Optional, Inject, ViewChild } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-preview-modal',
  templateUrl: './preview-modal.component.html',
  styleUrls: ['./preview-modal.component.css']
})
export class PreviewModalComponent implements OnInit {

  url = 'http://' + window.location.hostname + ':3004/';
  previewType = 'other';
  previewData: any = {};

  constructor(
    public dialogRef: MatDialogRef<PreviewModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.previewData = this.data;
  }

  ngOnInit(): void {
    console.log('Preview : ', this.previewData);
    this.previewType = this.checkExtension(this.previewData.extension);
    console.log(this.previewType);
  }

  checkExtension(file) {
    const extn = file.split('.').pop();
    const imageExtensions = new Set(['jpeg', 'jpg', 'png', 'gif']);
    const videoExtenstion = new Set(['mp4', 'mov']);
    const audioExtenstion = new Set(['mp3']);

    if (imageExtensions.has(extn.toLowerCase())) {
        return 'image';
    } else if (videoExtenstion.has(extn.toLowerCase())) {
        return 'video';
    } else if (audioExtenstion.has(extn.toLowerCase())) {
        return 'audio';
    } else {
        return 'other';
    }
  }

  cancel() {
    this.dialogRef.close({ event: 'Cancel' , data:  ''});
  }

}
