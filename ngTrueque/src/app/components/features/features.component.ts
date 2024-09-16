import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <div class="text-5xl mb-4">🔄</div>
        <h3 class="text-xl font-bold mb-2">Intercambios Locales</h3>
        <p>Conecta con personas de tu área y realiza trueques de forma fácil y segura.</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <div class="text-5xl mb-4">💬</div>
        <h3 class="text-xl font-bold mb-2">Chat Integrado</h3>
        <p>Negocia los términos del intercambio directamente a través de nuestra plataforma.</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <div class="text-5xl mb-4">⭐</div>
        <h3 class="text-xl font-bold mb-2">Sistema de Valoración</h3>
        <p>Construye tu reputación y confía en otros usuarios basándote en sus valoraciones.</p>
      </div>
    </section>
  `,
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {}