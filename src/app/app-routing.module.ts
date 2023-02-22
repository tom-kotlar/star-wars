import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found.component';
import { HomeComponent } from './pages/home.component';

import { SeriesDetailComponent } from './series/series-detail/series-detail.component';
import { SeriesListComponent } from './series/series-list/series-list.component';

const routes: Routes = [

  { path: 'series', children: [
    { path: '', component: SeriesListComponent },
    { path: 'show', component: SeriesDetailComponent },
  ]},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
