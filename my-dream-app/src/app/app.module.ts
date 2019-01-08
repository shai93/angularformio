import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormioModule } from 'angular-formio';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { ThirdComponent } from './third/third.component';
import {ApiService} from './api.service';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    FirstComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
