import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="bg-yellow-400 p-2">
      <ul class="flex justify-center space-x-4">
        <li><a href="#home" class="text-gray-800 font-bold">Inicio</a></li>
        <li><a href="#products" class="text-gray-800 font-bold">Productos</a></li>
        <li><a href="#services" class="text-gray-800 font-bold">Servicios</a></li>
        <li><a href="#profile" class="text-gray-800 font-bold">Mi Perfil</a></li>
        <li><a href="#messages" class="text-gray-800 font-bold">Mensajes</a></li>
      </ul>
    </nav>
  `,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {}