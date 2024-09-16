import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="bg-green-600 text-white p-4">
      <h1 class="text-2xl font-bold">TruequeDelSur</h1>
      <p class="text-sm">Intercambia productos y servicios en tu comunidad local</p>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}