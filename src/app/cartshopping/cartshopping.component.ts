import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cartshopping',
  templateUrl: './cartshopping.component.html',
  styleUrls: ['./cartshopping.component.css']
})
export class CartshoppingComponent implements OnInit {

  public cart: any[] = [];
  public total: number = 0;


  constructor(private cartService: CartService) {
    this.cart = this.cartService.cart;
    this.cartService.cart.forEach(product => this.total += product.price)

  }

  ngOnInit(): void {

  }
  cleanToCart(product: any) {
    this.cartService.cleanCart(product);
    return this.total = this.total -= product.price;
  }
  paypal(product: any) {
    this.cartService.paypaltoCart(product);
     return this.total = 0;
  }
}
