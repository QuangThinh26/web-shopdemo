import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public cart: any[] = [];
  arrProduct = [
    { id: 1, image: "https://dt24h.com/wp-content/uploads/2020/04/iphone.png", name: "Iphone12 Pro", price: 10000 },
    { id: 2, image: "https://phatthanhmobile.vn/wp-content/uploads/2020/01/iphone-11-pro-max-gold-select-2019-1.png", name: "Iphone X", price: 20000 },
    { id: 3, image: "https://cf.shopee.vn/file/cbcb8f5cb4904ab765e73deef1e27235", name: "Iphone12 ProMax", price: 25000 },
    { id: 4, image: "https://image.voso.vn/users/vosoimage/images/c470d1c654aa4b415d8ae425ca92995f?t%5B0%5D=maxSize%3Awidth%3D256%2Cheight%3D256&t%5B1%5D=compress%3Alevel%3D100&accessToken=9eea8b05d6db46b98e1fb276e527a34076a18dce98aaef27d440dc0a154ab600", name: "SamSung Plus", price: 25000 }
  ]
  constructor(private cartService: CartService) {
    this.cart = this.cartService.cart;
  }

  ngOnInit(): void {
  }

  addToCart(product: any) {
    this.cartService.addtoCart(product)
  }

}
