import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  title = 'star-wars';

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

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
