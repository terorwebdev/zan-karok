import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { ServicesModule } from './services/services.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './layout/login/login.component';
import { ContentsComponent } from './layout/contents/contents.component';
import { ControlsComponent } from './layout/controls/controls.component';
import { UploadsComponent } from './layout/uploads/uploads.component';
import { UploadModalComponent } from './layout/uploads/modal/upload-modal/upload-modal.component';
import { DeleteModalComponent } from './layout/uploads/modal/delete-modal/delete-modal.component';

const path = 'http://localhost:3003';
const config: SocketIoConfig = { url: path, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    ContentsComponent,
    ControlsComponent,
    UploadsComponent,
    UploadModalComponent,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config),
    MaterialsModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
