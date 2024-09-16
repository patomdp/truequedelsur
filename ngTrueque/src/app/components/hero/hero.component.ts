import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
     <section class="relative bg-cover bg-center h-96 flex items-center justify-center text-white" style="background-image: url('assets/images/community-hero.jpg');">
      <div class="absolute inset-0 bg-black opacity-60"></div>
      <div class="relative z-10 text-center p-8">
        <h2 class="text-4xl font-bold mb-4">Bienvenido a TruequeDelSur</h2>
        <p class="mb-6">Descubre una nueva forma de intercambiar bienes y servicios en tu comunidad</p>
        <a href="#register" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Únete Ahora</a>
      </div>
    </section>
  `,
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {}