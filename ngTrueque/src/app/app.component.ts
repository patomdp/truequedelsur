import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FeaturesComponent } from './components/features/features.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { RecentTradesComponent } from './components/recent-trades/recent-trades.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    NavComponent,
    HeroComponent,
    FiltersComponent,
    FeaturesComponent,
    ProductGridComponent,
    RecentTradesComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TruequeDelSur';
}