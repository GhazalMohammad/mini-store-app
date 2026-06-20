import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
import { CartService } from '../../cart.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {


  cart:any[] = [];

  name = '';
  address = '';
  phone = '';
  paymentMethod = 'Cash';

  totalPrice = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(cart => {
    this.cart = cart;
    this.calculateTotal();
  });
  }

  calculateTotal() {

    this.totalPrice = 0;

    this.cart.forEach((item) => {
         const price = Number(item.price) || 0;
         const quantity = Number(item.quantity) || 1;

        this.totalPrice += price * quantity;
    });

  }

  remove(index: number) {

    this.cartService.removeFromCart(index);

    this.cart = this.cartService.getCart();

    this.updateCart();
  }

  increasQuantity(id: number){
    this.cartService.increaseQuantity(id);
    this.cart = this.cartService.getCart();
    this.updateCart();
  }
  decreaseQuantity(id:number){
    this.cartService.decreaseQuantity(id);
    this.cart = this.cartService.getCart();
    this.updateCart();
  }
  updateCart(){
    this.cart = this.cartService.getCart();
    this.calculateTotal();
  }


  placeOrder() {

  const user = JSON.parse(localStorage.getItem('user') || 'null');

  if (!user) {
    alert('You must login first');
    return;
  }

  const order = {
    id: Date.now(),

    userId: user.id,
    userName: user.email,

    name: this.name,
    address: this.address,
    phone: this.phone,
    payment: this.paymentMethod,

    products: this.cart,
    total: this.totalPrice,
    date: new Date().toDateString(),
    status: 'Pending'
  };

  const orders = JSON.parse(localStorage.getItem('orders') || '[]');

  orders.push(order);

  localStorage.setItem('orders', JSON.stringify(orders));

  // تنظيف السلة
  this.cartService.clearCart();
  this.name = '';
  this.address = '';
  this.phone = '';
  this.paymentMethod = 'Cash';
}


}
