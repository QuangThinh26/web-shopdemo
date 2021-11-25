import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor() { }
  public cart: any[] = [];

  addtoCart(product: any) {
    this.cart.push(product)
  };
  cleanCart(product: any) {
    this.cart.splice(product, 1)
  };
  paypaltoCart(product: any) {
    this.cart.splice(0, this.cart.length)
  }
}
