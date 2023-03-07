import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "./card/card.component";
import { PrimeNgModule } from "./primeng.module";



@NgModule({
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ]
})
export class SharedModule { }
