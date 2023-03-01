export * from './not-found.component';
export * from './toolbar.component'
export * from './home.component'


import {ToolbarComponent} from "./toolbar.component";
import { NotFoundComponent } from './not-found.component';
import {HomeComponent} from "./home.component";

export const Core = [
  NotFoundComponent,
  ToolbarComponent,
  HomeComponent
];
