import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { FilesMeta } from './uploads-metadata';
import { MatDialog } from '@angular/material/dialog';
import { UploadService } from '../../services/upload.service';
import { UploadModalComponent } from './modal/upload-modal/upload-modal.component';
import { DeleteModalComponent } from './modal/delete-modal/delete-modal.component';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css'],
})
export class UploadsComponent implements OnInit {
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  tableHeader: string[] = [
    'select',
    'name',
    'type',
    'size',
    'extension',
    'action',
  ];
  uploadList: MatTableDataSource<FilesMeta>;
  masterSelected: boolean;
  currentSelectedContent = [];

  constructor(private uploadService: UploadService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.uploadService.list().subscribe((result) => {
      console.log(result);
      this.uploadList = new MatTableDataSource<FilesMeta>(result.data.children);
    });
  }

  selectMasterEvent() {
    console.log('Select All : ' + this.masterSelected);
    if (this.masterSelected) {
      for (const item of this.uploadList.data) {
        item.is_selected = this.masterSelected;
        this.selectListContentEvent(item);
      }
    } else {
      for (const item of this.uploadList.data) {
        item.is_selected = this.masterSelected;
        this.selectListContentEvent(item);
      }
    }
  }

  selectListContentEvent(content) {
    if (content.is_selected) {
      if (this.currentSelectedContent.length === 0) {
        this.currentSelectedContent.push(content);
      } else {
        const check = this.currentSelectedContent.find(
          item => item.name === content.name
        );
        if (check === undefined) {
          this.currentSelectedContent.push(content);
        }
      }
    } else {
      this.currentSelectedContent = this.currentSelectedContent.filter(
        item => item.name !== content.name
      );
    }
  }

  openDialog(type, sendData) {
    let dialogRef: any;

    switch (type) {
      case 'upload':
        dialogRef = this.dialog.open(UploadModalComponent, {
          width: '70%',
          height: '70%',
          data: sendData,
        });
        break;
      case 'delete':
        dialogRef = this.dialog.open(DeleteModalComponent, {
          width: '50%',
          height: '50%',
          data: sendData,
        });
        break;
      default:
        break;
    }

    dialogRef.afterClosed().subscribe((result) => {
      const incoming = result;
      switch (type) {
        case 'upload':
          console.log('UploadFile Incomming : ', incoming);
          this.ngOnInit();
          break;
        case 'delete':
          console.log('Delete Incomming : ', incoming);
          this.ngOnInit();
          break;
        default:
          break;
      }
    });
  }
}
