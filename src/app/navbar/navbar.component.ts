import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LucideAngularModule,ShoppingCart,Search,Menu } from 'lucide-angular';
import { RouterLink,Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,LucideAngularModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  products : any[] = [] ;
  user: any =null;

    constructor(private searchService: SearchService, private router:Router){}

ngOnInit() {
  this.loadUser();
}

loadUser() {
  this.user = JSON.parse(localStorage.getItem('user') || 'null');
}
ngDoCheck() {
  this.loadUser();
}


  icons = {
    ShoppingCart,
    Search,
    Menu
  };
  isMenuOpen = false;
  showSearch = false;

  toggleSearch(){
    this.showSearch = !this.showSearch;
  }
  onSearch(event: any){
    this.searchService.setSearch(event.target.value);
  }
   
  logOut(){
    localStorage.removeItem('user');
    this.user = null;
    this.router.navigate(['/login']);
  }
  
  
  
  
}
