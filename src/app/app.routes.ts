import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShoesComponent } from './pages/shoes/shoes.component';
import { ClothesComponent } from './pages/clothes/clothes.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminComponent } from './admin/admin.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  // مفتوحة للجميع
  { path: 'home', component: HomeComponent },

  // محمية
  { path: 'shoes', component: ShoesComponent, canActivate: [authGuard] },
  { path: 'clothes', component: ClothesComponent, canActivate: [authGuard] },
  { path: 'product/:id', component: ProductDetailsComponent, canActivate: [authGuard] },
  { path: 'cart', component: CartComponent, canActivate: [authGuard] },
  { path: 'orders', component: OrdersComponent, canActivate: [authGuard] },

  // صفحات الأدمن
  { path: 'admin', component: AdminComponent, canActivate: [authGuard] },
  { path: 'AdminOrders', component: AdminOrdersComponent, canActivate: [authGuard] },

  { path: 'register', component: RegisterComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

