import { NgModule } from '@angular/core';
import { UploadService } from './upload.service';
import { SocketService } from './socket.service';
import { ContentService } from './content.service';

@NgModule({
  providers: [
    UploadService,
    SocketService,
    ContentService
  ]
})
export class ServicesModule { }
