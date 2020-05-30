import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  toConfirm: any;

  constructor(
    public dialogRef: MatDialogRef<ConfirmModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.toConfirm = JSON.stringify(data);
    console.log(data);
  }

  ngOnInit(): void {
  }

  cancel() {
    this.dialogRef.close({ event: 'Cancel' , data:  ''});
  }

  ok() {
    this.dialogRef.close({ event: 'Confirm' , data:  ''});
  }

}
