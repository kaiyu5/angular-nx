import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Card } from '@angular-nx/ui';

@Component({
  selector: 'lib-customers',
  imports: [CommonModule, Card],
  template: `
    <h2>Customers</h2>
    @for (customer of customers; track customer.name) {
    <lib-card [title]="customer.name">
      <div>From {{ customer.city }}</div>
    </lib-card>
    }
  `,
  styleUrl: './customers.css',
})
export class Customers {
  customers = [
    { name: 'Roland', city: 'Gilead' },
    { name: 'Eddie', city: 'New York' },
    { name: 'Odetta', city: 'New York' },
    { name: 'Jake', city: 'New York' },
  ];
}
