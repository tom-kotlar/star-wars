import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrimeNgModule } from "./shared/primeng.module";

import { NotFoundComponent } from "./pages/not-found.component";
import { HomeComponent } from './pages/home.component';

import { MoviesModule } from './movies/movies.module';
import { SeriesModule } from './series/series.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    PrimeNgModule,
    MoviesModule,
    SeriesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
