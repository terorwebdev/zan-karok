import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialsModule } from './materials/materials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesModule } from './services/services.module';
import { LayoutComponent } from './layout/layout.component';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { CheckoutComponent } from './layout/checkout/checkout.component';
import { PlayerComponent } from './layout/player/player.component';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './layout/login/login.component';
import { SettingComponent } from './layout/setting/setting.component';
import { WaitingComponent } from './layout/waiting/waiting.component';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    WelcomeComponent,
    CheckoutComponent,
    PlayerComponent,
    HomeComponent,
    LoginComponent,
    SettingComponent,
    WaitingComponent,
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialsModule,
    BrowserAnimationsModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
