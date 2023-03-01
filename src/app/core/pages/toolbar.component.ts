import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'toolbar',
  template: `
    <p-menubar [model]="items" class="shadow-5">

      <ng-template pTemplate="start">
        <a href="home">
          <img  src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png" height="50" alt="image start wars">
        </a>
      </ng-template>

      <ng-template pTemplate="end">
        <p-tieredMenu [showTransitionOptions]="'0ms'" [hideTransitionOptions]="'0ms'" #account [model]="accounts"
                      [popup]="true">
        </p-tieredMenu>

        <button pButton pRipple type="button" icon="bx bx-dots-vertical-rounded"
                class="p-button-rounded p-button-secondary p-button-text p-button-lg ml-6" #btn (click)="account.toggle($event)">
        </button>
      </ng-template>

    </p-menubar>
  `,


})
export class ToolbarComponent {

  items: MenuItem[] = [
    { label: '🏠 Home' , routerLink: 'home'},
    { label: '🎞️ Movies' ,routerLink: 'movies'},
    { label: '📺 Series' ,routerLink: 'series'},
    { label: '📓 Comics', routerLink: 'comics'},
    { label: '🦸 Characters', routerLink: 'characters'},
  ];
  accounts: MenuItem[] = [
    { label: 'Luke Skywalker' , icon: 'bx bxs-user-circle'},
    { label: 'test@test.com', icon:'bx bxs-envelope'},
    { label: 'Edit Profile' , icon:'bx bxs-message-alt-edit'},
    {separator:true},
    { label: 'Version: 0.0.0' , icon:'bx bx-mobile'},
    { label: 'Release: 0.0.0' , icon:'bx bxs-box'},
    {separator:true},
    { label: 'Log Out' , icon:'bx bxs-log-out-circle'},
  ];
}
