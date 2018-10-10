import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent {

  products: any[] = [];
  num = 1;

  constructor() {
    for (this.num; this.num <= 10; this.num += 1) {
      this.addProducts(this.num);
    }
  }

  addProducts(i) {
    this.products.push({
      id: i,
      price: (Math.random() * (0.0 - 10.0) + 10.0).toFixed(2),
      status: ['', '', '', 'sale'][Math.floor(Math.random() * 4)],
      discounted: ['', '', '', 'discounted'][Math.floor(Math.random() * 4)],
      discount: (Math.random() * (0.0 - 10.0) + 10.0).toFixed(2),
      name: [
        'Coffee'
      ][Math.floor(Math.random() * 1)],
      description: ['B & W', 'Grey', 'Black', 'Green', 'Black'][
        Math.floor(Math.random() * 5)
      ]
    });
  }

  isOver(): boolean {
    return !window.matchMedia(`(max-width: 960px)`).matches;
  }

}
