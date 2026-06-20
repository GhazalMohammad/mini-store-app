import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { ProductService } from '../../product.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
   imports: [RouterLink, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent  implements OnInit{
    product: any;
constructor(
  private route: ActivatedRoute,
  private productService: ProductService,
  private cartService: CartService,
  private router: Router
) {}
ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const products = JSON.parse(localStorage.getItem('products') || '[]');
    this.product = products.find((p:any) => p.id === id);

      if (!this.product) {
      console.log('Product not found');
      this.router.navigate(['/']);
    }
  }
  addToCart(){
     console.log(this.product);
    this.cartService.addToCart(this.product);
    this.router.navigate(['/cart']);
  }
} 

