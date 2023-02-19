import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(theCartItem: CartItem) {
    // check if already item in out cart
    let alreadyExistsInCart: boolean = false;
    let exitstingCartItem: CartItem | undefined;

    if(this.cartItems.length >0) {
      // find the item in the cart based on the item id
      exitstingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItem.id);
    }

    if(exitstingCartItem != undefined) {
      exitstingCartItem.quantity++;
    }  else {
      // add item to the array
      this.cartItems.push(theCartItem);
    }

    // compute cart total price and total quantity
    this.computeCartTotals();
  }

  computeCartTotals(){
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for(let currentCartItem of this.cartItems){
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;

      // publish new values to all subscribers
      this.totalPrice.next(totalPriceValue);
      this.totalQuantity.next(totalQuantityValue);
    }
  }

}
