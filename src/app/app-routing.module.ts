import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core';
import { HomeComponent } from './core';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'movies',
    loadChildren: () =>
      import('./movies/movies.module').then((x) => x.MoviesModule),
  },
  {
    path: 'series',
    loadChildren: () =>
      import('./series/series.module').then((x) => x.SeriesModule),
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
