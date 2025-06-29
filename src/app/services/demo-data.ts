import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { IOrder, IShares, IUserFolio } from '../model/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class DemoData {

  //  private jsonUrl = 'assets/data.json';  // path to JSON file

  constructor(private http: HttpClient) {}

  // getData(): Observable<any> {
  //   return this.http.get<any>(this.jsonUrl);
  // }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/products');
  }

  getFunds(): Observable<IUserFolio> {
    const fundsJsonUrl = 'assets/funds.json'; 
    return this.http.get<IUserFolio>(fundsJsonUrl);
  }

  getSharePrices(): Observable<number> {
    return interval(2000).pipe( // simulate updates every 2 seconds
      map(() => this.generateRandomPriceValue())
    );
  }

  private generateRandomPriceValue(): number {
    // Simulate a price between 95 and 105
    return parseFloat((100 + (Math.random() - 0.5) * 10).toFixed(2));
  }

  placeOrder(payload: IOrder): Observable<{}> {
   return this.http.post('http://localhost:3000/orders', payload)
  }

  getShareList(): Observable<IShares[]> {
    const fundsJsonUrl = 'assets/shares.json'; 
    return this.http.get<IShares[]>(fundsJsonUrl);

    // const url = 'http://localhost:3000/shares-list'
    // return this.http.get<any[]>(url);
  }
}
