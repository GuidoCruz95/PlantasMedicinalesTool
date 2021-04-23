import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/lista-usuarios', title: 'Lista de usuarios',  icon: 'pe-7s-graph', class: '' },
  { path: '/vista-lista-plantas', title: 'Lista de plantas',  icon: 'pe-7s-graph', class: '' },
  { path: '/login', title: 'Login',  icon: 'pe-7s-safe', class: '' },
    // { path: '/dashboard', title: 'tmp-Dashboard',  icon: 'pe-7s-graph', class: '' },
    // { path: '/user', title: 'tmp-User Profile',  icon:'pe-7s-user', class: '' },
    // { path: '/table', title: 'tmp-Table List',  icon:'pe-7s-note2', class: '' },
    // { path: '/typography', title: 'tmp-Typography',  icon:'pe-7s-news-paper', class: '' },
    // { path: '/icons', title: 'tmp-Icons',  icon:'pe-7s-science', class: '' },
    // { path: '/maps', title: 'tmp-Maps',  icon:'pe-7s-map-marker', class: '' },
    // { path: '/notifications', title: 'tmp-Notifications',  icon:'pe-7s-bell', class: '' },
    // { path: '/upgrade', title: 'tmp-Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
