import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private router:Router){}

  private cartKey = 'cart';

  private cartSubject = new BehaviorSubject<any[]>(this.getCart());
  cart$ = this.cartSubject.asObservable();

  getCart() {
    const data = localStorage.getItem(this.cartKey);
    return data ? JSON.parse(data) : [];
  }

  private updateCart(cart: any[]) {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
    this.cartSubject.next(cart); // 🔥 هنا السحر
  }

  addToCart(product: any) {

    const user = localStorage.getItem('user');

    if (!user) {
      this.router.navigate(['/login'], {
      queryParams: { returnUrl: '/cart' }
      });
      return;
    }

    const cart = this.getCart();

    cart.push({
      ...product,
      quantity: 1
    });

    this.updateCart(cart);
  }

removeFromCart(id: number) {

  const cart = this.getCart();

  const updatedCart = cart.filter(
    (p: any) => p.id !== id
  );

  this.updateCart(updatedCart);
}

  increaseQuantity(id: number) {
    const cart = this.getCart();
    const item = cart.find((p : any) => p.id === id);

    if (item) {
      item.quantity += 1;
    }

    this.updateCart(cart);
  }

  decreaseQuantity(id: number) {
    const cart = this.getCart();
    const item = cart.find((p : any) => p.id === id);

    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        const index = cart.findIndex((p : any) => p.id === id);
        cart.splice(index, 1);
      }
    }

    this.updateCart(cart);
  }
  clearCart() {
  this.cartSubject.next([]);
  localStorage.removeItem('cart');
}


}