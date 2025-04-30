import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../data-access/product.model';

type Cart = Product[];

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private storageKey = 'shoppingCart';

  private _cart = signal(this.getCart());

  public readonly cart = this._cart.asReadonly();
  public readonly cartSize = computed(() => this._cart().length);
  public readonly cartTotalPrice = computed(() => {
    return this._cart().reduce((acc, product) => acc + product.price, 0);
  });

  constructor() { }

  getCart(): Cart {
    const cart = localStorage?.getItem(this.storageKey);
    return cart ? JSON.parse(cart) : [];
  }

  addToCart(item: Product) {
    // check if product is already in cart
    const cart = this.getCart();
    cart.push(item);
    this.updateCart(cart);
  }

  removeFromCart(index: number): void {
    const cart = this.getCart();
    cart.splice(index, 1);
    this.updateCart(cart);
  }

  clearCart(): void {
    localStorage.removeItem(this.storageKey);
    this._cart.set([]);
  }

  private updateCart(cart: Product[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
    this._cart.set(cart);
  }
}
