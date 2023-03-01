import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrimeNgModule } from "./shared/primeng.module";

import { NotFoundComponent } from "./core";
import { HomeComponent } from './core';
import { HttpClientModule } from '@angular/common/http';
import { Core } from "./core";







@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    Core

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
