import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }

  getOrders(){
    const data = localStorage.getItem('orders');
    return data ? JSON.parse(data) : [];                              
  }
}
