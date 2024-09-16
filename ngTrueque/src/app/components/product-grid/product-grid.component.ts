import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      <app-product-card *ngFor="let product of products" [product]="product"></app-product-card>
    </section>
  `,
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getFeaturedProducts().subscribe(
      products => this.products = products
    );
  }
}