import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.scss']
})
export class RelatedProductsComponent implements OnInit {
  @Input() product: Product;
  @Output() switch = new EventEmitter();

  products: Product [] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.products = this.productService.getRelatedProducts(this.product);
  }
  onSwitch(product){
    this.products = this.productService.getRelatedProducts(product);
    this.switch.emit(product);
  }


}
