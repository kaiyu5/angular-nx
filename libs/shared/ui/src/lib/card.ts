import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-card',
  imports: [],
  template: `<div class="card">
    <h3>{{ title() }}</h3>
    <ng-content></ng-content>
  </div>`,
  styles: `
    .card {
      display: inline-block;
      padding: 0.5rem;
      margin: 0.5rem;
      background: #eee;
      h3 {
        margin: 0;
      }
    }
  `,
})
export class Card {
  title = input("");
}
