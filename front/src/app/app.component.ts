import {
  Component,
  inject,
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { SplitterModule } from 'primeng/splitter';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from "primeng/toast";
import {BadgeModule} from "primeng/badge"
import { PanelMenuComponent } from "./shared/ui/panel-menu/panel-menu.component";
import { CartService } from "./products/service/cart.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [RouterModule, SplitterModule, ToolbarModule, PanelMenuComponent, ToastModule, BadgeModule],
})
export class AppComponent {
  title = "ALTEN SHOP";
  private readonly cartService= inject(CartService);
  cartSize = this.cartService.cartSize;

}
