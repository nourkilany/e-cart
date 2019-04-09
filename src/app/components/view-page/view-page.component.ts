import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss']
})
export class ViewPageComponent implements OnInit {
  public product_id: any;
  products: Product[];
  constructor(private router: Router, private route: ActivatedRoute, private productsService:ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.product_id = this.route.params['value'].id;
  }

}
