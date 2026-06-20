import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { LucideAngularModule, ShoppingCart, Search, Menu } from 'lucide-angular';
import { SearchService } from '../search.service';

@Component({
selector: 'app-home',
standalone: true,
imports: [CommonModule, LucideAngularModule, RouterLink],
templateUrl: './home.component.html',
styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

// ===== Slider =====
images = [
{ src: 'assets/Model1.png' },
{ src: 'assets/Model2.png' },
{ src: 'assets/Model.png' }
];

currentIndex = 0;
interval: any;

// ===== Products =====
products: any[] = [];
filteredProducts: any[] = [];
searchText = '';

constructor(
private router: Router,
private productService: ProductService,
private searchService: SearchService
) {}

ngOnInit() {


this.startSlider();

this.loadProducts();

this.searchService.search$.subscribe(text => {
  this.searchText = text;
  this.filterProducts();
});


}

goToProduct(id: number) {
this.router.navigate(['/product', id]);
}

// ===== Slider =====

startSlider() {
this.interval = setInterval(() => {
this.next();
}, 4000);
}

next() {
this.currentIndex =
(this.currentIndex + 1) % this.images.length;
}

prev() {
this.currentIndex =
(this.currentIndex - 1 + this.images.length) %
this.images.length;
}

scrollToProducts() {
document.getElementById('products')?.scrollIntoView({
behavior: 'smooth'
});
}

// ===== Products =====

loadProducts() {
this.products = JSON.parse(
localStorage.getItem('products') || '[]'
);


this.filteredProducts = this.products;

}

filterProducts() {
this.filteredProducts = this.products.filter(product =>
product.name
.toLowerCase()
.includes(this.searchText.toLowerCase())
);
}

ngOnDestroy() {
if (this.interval) {
clearInterval(this.interval);
}
}

icons = {
ShoppingCart,
Search,
Menu
};

}
