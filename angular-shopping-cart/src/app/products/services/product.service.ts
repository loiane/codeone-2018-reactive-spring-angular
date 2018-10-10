import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly API = `http://localhost:8080/producs`;

  constructor(private http: HttpClient) {}

  load() {
    return this.http.get<Product[]>(this.API);
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
