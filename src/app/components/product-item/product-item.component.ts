import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() wishProduct: EventEmitter<Product> = new EventEmitter();
  // wished: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onWish(){
    this.wishProduct.emit(this.product);
  }

}
