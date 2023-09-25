import { Injectable } from '@angular/core';
import { Comic } from '../models/Comic';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Comic[] = [];

  constructor() {}

  addToCart(comic: Comic) {
    this.cartItems.push(comic);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  getCartItems() {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      this.cartItems = JSON.parse(storedItems);
    }
    return this.cartItems;
  }
}
