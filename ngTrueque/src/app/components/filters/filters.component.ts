import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
<section class="bg-white p-4 rounded-lg shadow-md mb-8">
      <h2 class="text-2xl font-bold mb-4">Buscar y Filtrar</h2>
      <form (ngSubmit)="onSubmit()" class="flex flex-wrap gap-4">
        <select [(ngModel)]="filters.category" name="category" class="p-2 border rounded">
          <option value="">Todas las categorías</option>
          <option value="electronica">Electrónica</option>
          <option value="hogar">Hogar</option>
          <option value="deportes">Deportes</option>
          <option value="servicios">Servicios</option>
        </select>
        <select [(ngModel)]="filters.location" name="location" class="p-2 border rounded">
          <option value="">Todas las ubicaciones</option>
          <option value="buenosaires">Buenos Aires</option>
          <option value="cordoba">Córdoba</option>
          <option value="rosario">Rosario</option>
        </select>
        <input [(ngModel)]="filters.search" name="search" type="text" placeholder="Buscar por palabra clave" class="p-2 border rounded">
        <button type="submit" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Buscar</button>
      </form>
    </section>
  `,
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Output() filtersChanged = new EventEmitter<any>();

  filters = {
    category: '',
    location: '',
    search: ''
  };

  onSubmit() {
    this.filtersChanged.emit(this.filters);
  }
}