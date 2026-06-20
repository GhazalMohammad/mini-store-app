import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, JsonPipe } from '@angular/common';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  products: any[] = [];
  editingId: number | null = null;
  name = '';
  price = 0;
  category = '';
  desc = '';
  selectedImage = '';
  @ViewChild('fileInput') fileInput!: ElementRef;
  showError = false;
  errorMessage = '';
  showSuccess = false;
  successMessage = '';
  totalProducts = 0;
totalOrders = 0;
totalSales = 0;
featured = false;
  
  ngOnInit(){
      this.loadProducts();
       this.updateStats();
       this.loadStats();


  }
  loadProducts(){
    this.products = JSON.parse(localStorage.getItem('products') ||'[]');
  }
  

 addProduct() {

  if (!this.name || this.price <= 0 || !this.category || !this.selectedImage) {
    this.showErrorAlert('Please fill all fields');
    return;
  }

  const products = JSON.parse(
    localStorage.getItem('products') || '[]'
  );

  if (this.editingId) {

    const index = products.findIndex(
      (p: any) => p.id === this.editingId
    );

    products[index] = {
      ...products[index],
      name: this.name,
      price: this.price,
      category: this.category,
      desc: this.desc,
      image: this.selectedImage
    };

    localStorage.setItem(
      'products',
      JSON.stringify(products)
    );

    this.loadProducts();

    this.showSuccessToast('Product updated successfully');

    this.editingId = null;

  } else {

    const product = {
  id: Date.now(),
  name: this.name,
  price: this.price,
  category: this.category,
  desc: this.desc,
  image: this.selectedImage,
  featured: this.featured
      
    };

    products.push(product);

    localStorage.setItem(
      'products',
      JSON.stringify(products)
    );

    this.loadProducts();

    this.showSuccessToast('Product added successfully');
  }

  this.name = '';
  this.price = 0;
  this.category = '';
  this.desc = '';
  this.selectedImage = '';
  this.fileInput.nativeElement.value = '';
  this.featured = false;
}
updateStats() {

  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  const products = JSON.parse(localStorage.getItem('products') || '[]');

  this.totalOrders = orders.length;
  this.totalProducts = products.length;

  this.totalSales = orders.reduce((sum: number, o: any) => {
    return sum + (o.total || 0);
  }, 0);
}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.selectedImage = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

deleteProduct(id: number){
  this.products = this.products.filter(product => product.id !== id);
  localStorage.setItem('products', JSON.stringify(this.products));

  this.loadStats();

  this.showSuccessToast('Product deleted successfully');
}

  showErrorAlert(message: string){
    this.errorMessage = message;
    this.showError = true;
  }

  showSuccessToast(message: string) {

  this.successMessage = message;
  this.showSuccess = true;

  setTimeout(() => {
    this.showSuccess = false;
  }, 3000);

}
editProduct(product: any){
  this.editingId  = product.id;
  this.name = product.name;
  this.price = product.price;
  this.category = product.category;
  this.desc = product.desc;
  this.selectedImage = product.image;
}
loadStats() {

  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  const products = JSON.parse(localStorage.getItem('products') || '[]');

  this.totalOrders = orders.length;
  this.totalProducts = products.length;

  this.totalSales = orders.reduce((sum: number, order: any) => {
    return sum + (order.total || 0);
  }, 0);

}

}
