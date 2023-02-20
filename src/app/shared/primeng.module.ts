import { NgModule } from '@angular/core';

import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {CardModule} from 'primeng/card';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextareaModule} from 'primeng/inputtextarea';

@NgModule({
    exports: [
        RippleModule,
        ButtonModule,
        MenubarModule,
        InputTextModule,
        TieredMenuModule,
        CardModule,
        AvatarModule,
        AvatarGroupModule,
        InputNumberModule,
        InputTextareaModule

    ],
})
export class PrimeNgModule { }
