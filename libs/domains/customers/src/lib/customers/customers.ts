import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-customers',
  imports: [CommonModule],
  template: `
    <h2>Customers</h2>
    @for (customer of customers; track customer.name) {
    <div class="card">
      <h3>{{ customer.name }}</h3>
    </div>
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
