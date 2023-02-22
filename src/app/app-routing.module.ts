import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found.component';
import { HomeComponent } from './pages/home.component';

const routes: Routes = [
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
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
