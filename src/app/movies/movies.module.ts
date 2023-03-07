import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../shared/primeng.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from "../shared/shared.module";

export const routes: Routes = [
  { path: '', component: MoviesListComponent},
];

@NgModule({
  declarations: [
   MoviesListComponent,
  ],
    imports: [
        CommonModule, PrimeNgModule, RouterModule.forChild(routes), SharedModule,
    ],
})
export class MoviesModule { }
