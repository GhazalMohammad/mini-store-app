import { Component } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-orders',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './admin-orders.component.html',
  styleUrl: './admin-orders.component.css'
})
export class AdminOrdersComponent {

  orders: any[] = [];
  ngOnInit() { 
    this.orders = JSON.parse(localStorage.getItem('orders') || '[]')
  }
  markAsDone(id: number) {

  const orders = JSON.parse(localStorage.getItem('orders') || '[]');

  const order = orders.find((o: any) => o.id === id);

  if (order) {
    order.status = 'Done';
  }

  localStorage.setItem('orders', JSON.stringify(orders));

  this.orders = orders;
}
deleteOrder(id: number) {

  let orders = JSON.parse(localStorage.getItem('orders') || '[]');

  orders = orders.filter((o: any) => o.id !== id);

  localStorage.setItem('orders', JSON.stringify(orders));

  this.orders = orders;
}

}
