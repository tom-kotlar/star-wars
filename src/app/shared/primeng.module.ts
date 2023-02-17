import { NgModule } from '@angular/core';

import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import {TieredMenuModule} from 'primeng/tieredmenu';

@NgModule({
    exports: [
        RippleModule,
        ButtonModule,
        MenubarModule,
        InputTextModule,
        TieredMenuModule

    ],
})
export class PrimeNgModule { }
