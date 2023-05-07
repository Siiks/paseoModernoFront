import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { HeaderlayoutComponent } from './layouts/headerlayout/headerlayout.component';
import { FooterlayoutComponent } from './layouts/footerlayout/footerlayout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    HeaderlayoutComponent,
    FooterlayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
