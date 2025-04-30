import { Component, Input } from '@angular/core';
import { Product } from 'app/products/data-access/product.model';

@Component({
  selector: 'app-image-container',
  standalone: true,
  imports: [],
  templateUrl: './image-container.component.html',
  styleUrl: './image-container.component.css'
})
export class ImageContainerComponent {

  @Input() imgUrl: string = '/assets/sample.jpg';
  @Input() product!: Product;
}
