import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   initStorage() {

  const data = localStorage.getItem('products');

  if (!data) {
    localStorage.setItem('products', JSON.stringify(this.products));
  }
}

constructor() {
  this.initStorage();
}
  private products = [
    {
      id: 1,
      name: 'Minimal Sneakers',
      price: 120,
      desc:'A product description is marketing copy that explains what a product is, highlights its features and benefits, and convinces the customer to make a purchase.',
      image: 'assets/Slipper.png',
      category: 'Shoes'
    },
    {
      id: 2,
      name: 'Urban Jacket',
      price: 150,
      desc:'A product description is marketing copy that explains what a product is, highlights its features and benefits, and convinces the customer to make a purchase.',
      image: 'assets/T-shirt.png',
      category: 'Clothes'
    },
     {
      id: 3,
      name: 'Urban Jacket',
      price: 150,
      desc:'A product description is marketing copy that explains what a product is, highlights its features and benefits, and convinces the customer to make a purchase.',
      image: 'assets/T-shirt.png',
      category: 'Clothes'
    },
     {
      id: 4,
      name: 'Urban Jacket',
      price: 150,
      desc:'A product description is marketing copy that explains what a product is, highlights its features and benefits, and convinces the customer to make a purchase.',
      image: 'assets/T-shirt.png',
      category: 'Clothes'
    }
    ,
     {
      id: 5,
      name: 'Urban Jacket',
      price: 150,
      desc:'A product description is marketing copy that explains what a product is, highlights its features and benefits, and convinces the customer to make a purchase.',
      image: 'assets/T-shirt.png',
      category: 'Clothes'
    }
    ,
     {
      id: 6,
      name: 'Urban Jacket',
      price: 150,
      desc:'A product description is marketing copy that explains what a product is, highlights its features and benefits, and convinces the customer to make a purchase.',
      image: 'assets/T-shirt.png',
      category: 'Clothes'
    }
      ,
     {
      id: 7,
      name: 'Urban Jacket',
      price: 150,
      desc:'A product description is marketing copy that explains what a product is, highlights its features and benefits, and convinces the customer to make a purchase.',
      image: 'assets/T-shirt.png',
      category: 'Clothes'
    }
      ,
     {
      id: 8,
      name: 'Urban Jacket',
      price: 150,
      desc:'A product description is marketing copy that explains what a product is, highlights its features and benefits, and convinces the customer to make a purchase.',
      image: 'assets/Slipper.png',
      category: 'Shoes'
    },
    {
      id: 9,
      name: 'Minimal Sneakers',
      price: 120,
      desc:'A product description is marketing copy that explains what a product is, highlights its features and benefits, and convinces the customer to make a purchase.',
      image: 'assets/Slipper.png',
      category: 'Shoes'
    },
    {
      id: 10,
      name: 'Minimal Sneakers',
      price: 120,
      desc:'A product description is marketing copy that explains what a product is, highlights its features and benefits, and convinces the customer to make a purchase.',
      image: 'assets/Slipper.png',
      category: 'Shoes'
    },
    {
      id: 11,
      name: 'Minimal Sneakers',
      price: 120,
      desc:'A product description is marketing copy that explains what a product is, highlights its features and benefits, and convinces the customer to make a purchase.',
      image: 'assets/Slipper.png',
      category: 'Shoes'
    },
    {
      id: 12,
      name: 'Minimal Sneakers',
      price: 120,
      desc:'A product description is marketing copy that explains what a product is, highlights its features and benefits, and convinces the customer to make a purchase.',
      image: 'assets/pngwing.png',
      category: 'Shoes'
    },
    {
      id: 13,
      name: 'Minimal Sneakers',
      price: 120,
      desc:'A product description is marketing copy that explains what a product is, highlights its features and benefits, and convinces the customer to make a purchase.',
      image: 'assets/pngwing.png',
      category: 'Shoes'
    },
    {
      id: 14,
      name: 'Minimal Sneakers',
      price: 120,
      desc:'A product description is marketing copy that explains what a product is, highlights its features and benefits, and convinces the customer to make a purchase.',
      image: 'assets/Slipper.png',
      category: 'Shoes'
    },
    {
      id: 15,
      name: 'Urban Jacket',
      price: 150,
      desc:'A product description is marketing copy that explains what a product is, highlights its features and benefits, and convinces the customer to make a purchase.',
      image: 'assets/T-shirt.png',
      category: 'Clothes'
    },
     {
      id: 16,
      name: 'Urban Jacket',
      price: 150,
      desc:'A product description is marketing copy that explains what a product is, highlights its features and benefits, and convinces the customer to make a purchase.',
      image: 'assets/pngwing.com.png',
      category: 'Shoes'
    },
     {
      id: 17,
      name: 'Urban Jacket',
      price: 150,
      desc:'A product description is marketing copy that explains what a product is, highlights its features and benefits, and convinces the customer to make a purchase.',
      image: 'assets/pngwing.com.png',
      category: 'Clothes'
    }
    ,
     {
      id: 18,
      name: 'Urban Jacket',
      price: 150,
      desc:'A product description is marketing copy that explains what a product is, highlights its features and benefits, and convinces the customer to make a purchase.',
      image: 'assets/T-shirt.png',
      category: 'Clothes'
    }
    ,
     {
      id: 19,
      name: 'Urban Jacket',
      price: 150,
      desc:'A product description is marketing copy that explains what a product is, highlights its features and benefits, and convinces the customer to make a purchase.',
      image: 'assets/T-shirt.png',
      category: 'Clothes'
    }
      ,
     {
      id: 20,
      name: 'Urban Jacket',
      price: 150,
      desc:'A product description is marketing copy that explains what a product is, highlights its features and benefits, and convinces the customer to make a purchase.',
      image: 'assets/T-shirt.png',
      category: 'Clothes'
    }
      ,
     {
      id: 21,
      name: 'Urban Jacket',
      price: 150,
      desc:'A product description is marketing copy that explains what a product is, highlights its features and benefits, and convinces the customer to make a purchase.',
      image: 'assets/T-shirt.png',
      category: 'Clothes'
    }
  ];

getProducts() {
  const data = localStorage.getItem('products');
  return data ? JSON.parse(data) : this.products;
}
getProductById(id: number) {
   const products = this.getProducts();
  return this.products.find(p => p.id === id);
}
 addProduct(product: any) {

  const products = this.getProducts(); 

  const newProduct = {
    id: Date.now(),
    ...product
  };
  

  products.push(newProduct);

  localStorage.setItem('products', JSON.stringify(products));
}
removeFromCart(index: number) {

  const cartData = localStorage.getItem('cart');

  const cart = cartData ? JSON.parse(cartData) : [];

  cart.splice(index, 1);

  localStorage.setItem('cart', JSON.stringify(cart));
}
}
