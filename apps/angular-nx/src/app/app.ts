import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NxWelcome } from './nx-welcome';

@Component({
  imports: [RouterModule, NxWelcome],
  selector: 'app-root',
  template: `<div class="navbar">
  @for (route of routes; track route.title) {
    <a [routerLink]="route.path">{{ route.title }}</a>
  }
  </div>
  <app-nx-welcome></app-nx-welcome>
  <router-outlet></router-outlet>`,
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-nx';
  routes = appRoutes;
}
