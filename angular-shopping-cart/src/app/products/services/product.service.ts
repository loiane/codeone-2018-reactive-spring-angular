import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../model/product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: any[] = [];

  private readonly API = `http://localhost:8080/producs`;

  constructor(private http: HttpClient) {}

  load() {
    // return this.http.get<Product[]>(this.API);
    for (let num = 1; num <= 10; num += 1) {
      this.addProducts(num);
    }
    return of(this.products);
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

  create(record: Product) {
    return this.http.post<Product>(this.API, record);
  }

  update(record: Product) {
    return this.http.put<Product>(`${this.API}/${record.id}`, record);
  }

  remove(id: string) {
    return this.http.delete<Product>(`${this.API}/${id}`);
  }
}
