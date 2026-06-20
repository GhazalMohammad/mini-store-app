import { Component,OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{
  orders: any[] = [] ;
  constructor(private ordersService: OrdersService){}

ngOnInit() {

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const orders = JSON.parse(localStorage.getItem('orders') || '[]');

  this.orders = orders.filter((o: any) =>
    o.userId === user.id
  );

}
}
