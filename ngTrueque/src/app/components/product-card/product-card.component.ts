import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;

  toggleFavorite() {
    this.product.isFavorite = !this.product.isFavorite;
    // Aquí se podría llamar a un servicio para actualizar el estado en el backend
  }

  makeOffer() {
    alert(`Has hecho una oferta por: ${this.product.title}. ¡El dueño se pondrá en contacto contigo pronto!`);
    // Aquí se podría implementar la lógica para hacer una oferta
  }
}