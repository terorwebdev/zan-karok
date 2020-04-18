import { Component, OnInit, Optional, Inject, ViewChild } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpEventType } from '@angular/common/http';
import { UploadService } from './../../../../services/upload.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  isSuccess: any[] = [];
  deleteList: any[] = [];

  constructor(
    private uploadService: UploadService,
    public dialogRef: MatDialogRef<DeleteModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (Array.isArray(this.data)) {
      this.deleteList = this.data;
    } else {
      this.deleteList.push(this.data);
    }
    console.log(this.deleteList);
   }

  ngOnInit(): void {
  }

  remove(name) {
    this.deleteList = this.deleteList.filter(
      item => item.name !== name
    );
  }

  confirm() {
    this.deleteList.forEach((item, index) => {
      this.uploadService.delete_file(item).subscribe(data => {
        console.log(data);
        console.log(index);
        if (data.data.result === 'success') {
          console.log('success');
          this.isSuccess[index] = true;
        }
      });
    });
  }

  cancel() {
    this.dialogRef.close({ event: 'Cancel' , data:  ''});
  }

}
