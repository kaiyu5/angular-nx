import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Card } from '@angular-nx/ui';
@Component({
  selector: 'lib-products',
  imports: [CommonModule, Card],
  template: `<h2>Products</h2>
    @for (product of products; track product.name) {
        <lib-card [title]="product.name">
      <div>{{ product.price }}</div>
    </lib-card>

    } `,
  styleUrl: './products.css',
})
export class Products {
  products = [
    { name: 'Bread', price: 1.5 },
    { name: 'Shirt', price: 60 },
    { name: 'Water', price: 0.99 },
    { name: 'Table', price: 200 },
  ];
}
