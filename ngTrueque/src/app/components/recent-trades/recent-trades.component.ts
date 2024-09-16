import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradeService } from '../../services/trade.service';
import { Trade } from '../../models/trade.model';

@Component({
  selector: 'app-recent-trades',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="recent-trades bg-white p-6 rounded-lg shadow-md">
      <h2>Intercambios Recientes</h2>
      <ul class="trade-list text-2xl font-bold mb-4">
        <li *ngFor="let trade of recentTrades" class="trade-item flex items-center mb-4 pb-4 border-b last:border-b-0">
          <img [src]="trade.userFrom.avatarUrl" [alt]="'Avatar de ' + trade.userFrom.name" class="trade-avatar w-12 h-12 rounded-full mr-4">
          <div>
            <strong>{{ trade.userFrom.name }}</strong> intercambió {{ trade.productFrom.title }} por {{ trade.productTo.title }} con <strong>{{ trade.userTo.name }}</strong>
          </div>
        </li>
      </ul>
    </section>

    <!-- <section class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Intercambios Recientes</h2>
      <ul>
        <li *ngFor="let trade of recentTrades" class="flex items-center mb-4 pb-4 border-b last:border-b-0">
          <img [src]="trade.userAvatar" [alt]="'Avatar de ' + trade.userName" class="w-12 h-12 rounded-full mr-4">
          <div>
            <strong>{{trade.userName}}</strong> intercambió {{trade.itemGiven}} por {{trade.itemReceived}} con <strong>{{trade.partnerName}}</strong>
          </div>
        </li>
      </ul>
    </section> -->
  `,
  styleUrls: ['./recent-trades.component.scss']
})
export class RecentTradesComponent implements OnInit {
  recentTrades: Trade[] = [];

  constructor(private tradeService: TradeService) {}

  ngOnInit() {
    this.tradeService.getRecentTrades().subscribe(
      trades => this.recentTrades = trades
    );
  }
}