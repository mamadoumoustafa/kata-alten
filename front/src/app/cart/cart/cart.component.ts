import { Component } from '@angular/core';
import { CartService } from 'app/products/service/cart.service';
import { ImageContainerComponent } from "app/shared/ui/image-container/image-container.component";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from "@angular/common";
import { CfaCurrencyPipe } from "app/shared/pipe/cfa-currency.pipe";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    DropdownModule,
    ImageContainerComponent,
    CommonModule,
    ButtonModule,
    CfaCurrencyPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  public cart = this.cartService.cart;
  public cartTotalPrice = this.cartService.cartTotalPrice;

  constructor(
    private cartService: CartService
  ) {
    console.log(this.cart)
  }

  public onDelete(index: number): void {
    this.cartService.removeFromCart(index);
  }

}
