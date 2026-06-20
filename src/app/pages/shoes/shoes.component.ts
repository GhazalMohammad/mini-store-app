import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../product.service';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { LucideAngularModule,ShoppingCart,Search,Menu } from 'lucide-angular';

@Component({
  selector: 'app-shoes',
  standalone: true,
  imports: [CommonModule,LucideAngularModule,RouterLink],
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.css'
})
export class ShoesComponent {

  products: any[] = [];

  constructor(private productService: ProductService,private router:Router) {}

ngOnInit(): void {

  const data = JSON.parse(
    localStorage.getItem('products') || '[]'
  );
this.products = data.filter(
  (p: any) =>p.category?.trim().toLowerCase() === 'shoes'
);

}
goToProduct(id:number){
    this.router.navigate(['/product', id]);
}

}
