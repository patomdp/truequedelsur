import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://api.trueque-del-sur.com/products'; // URL de ejemplo

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getFeaturedProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/featured`);
  }

  searchProducts(filters: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/search`, { params: filters });
  }

  // Aquí se pueden agregar más métodos según sea necesario
}