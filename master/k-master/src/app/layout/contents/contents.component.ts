import { ContentService } from './../../services/content.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";

export interface ContentList {
  title: string;
  artist: string;
  genre: string;
  album: string;
  language: string;
  country: string;
  duration: string;
  file_extension: string;
  filename: string;
  size: number;
  sound: string;
  upload_by: string;
  upload_date: number;
  update_date: number;
  is_selected: boolean;
}

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  currentContentList: MatTableDataSource<ContentList>;

  tableHeader: string[] = [
    "select",
    "title",
    "artist",
    "genre",
    "language",
    "country",
    "uploaded",
    "action"
  ];

  masterSelected: boolean;
  currentSelectedContent = [];

  constructor(
    private contentService: ContentService
    ) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.contentService.latest().subscribe((input) => {
      console.log('contentService : ', input);
      if (input.result === "success") {
        const dataList = input.data;
        for (const item of dataList) {
          item.is_selected = false;
        }
        this.currentContentList = new MatTableDataSource<ContentList>(dataList);
        console.log('this.contentList.data : ', this.currentContentList.data);
      } else {
        console.log('Error this.contentList.data');
      }
    });
  }

  selectMasterEvent() {
    console.log('Select All : ' + this.masterSelected);
    if (this.masterSelected) {
      for (const item of this.currentContentList.data) {
        item.is_selected = this.masterSelected;
        this.selectListContentEvent(item);
      }
    } else {
      for (const item of this.currentContentList.data) {
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
          item => item.filename === content.filename
        );
        if (check === undefined) {
          this.currentSelectedContent.push(content);
        }
      }
    } else {
      this.currentSelectedContent = this.currentSelectedContent.filter(
        item => item.filename !== content.filename
      );
    }
  }

}
