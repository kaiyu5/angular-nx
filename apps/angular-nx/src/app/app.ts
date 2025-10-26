import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { appRoutes } from './app.routes';

@Component({
  imports: [NxWelcome, RouterModule],
  selector: 'app-root',
  template: `<div class="navbar">
  @for (route of routes; track route.title) {
    <a [routerLink]="route.path">{{ route.title }}</a>
  }
  </div>
  <router-outlet></router-outlet>`,
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-nx';
  routes = appRoutes;
}
