import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trade } from '../models/trade.model';

@Injectable({
  providedIn: 'root'
})
export class TradeService {
  private apiUrl = 'https://api.trueque-del-sur.com/trades'; // URL de ejemplo

  constructor(private http: HttpClient) { }

  getRecentTrades(): Observable<Trade[]> {
    return this.http.get<Trade[]>(`${this.apiUrl}/recent`);
  }

  // Aquí se pueden agregar más métodos según sea necesario
}