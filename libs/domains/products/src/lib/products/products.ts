import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-products',
  imports: [CommonModule],
  template: `<h2>Products</h2>
    @for (product of products; track product.name) {
    <div class="card">
      <h3>{{ product.name }}</h3>
      <div>\${{ product.price }}</div>
    </div>
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
