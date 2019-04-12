import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';
import { WishlistService } from 'src/app/services/wishlist.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss']
})
export class ViewPageComponent implements OnInit {
  public product;
  public products;
  public product_id: any;
  
  
  

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private wishlistService: WishlistService,
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.product_id = this.route.snapshot.paramMap.get('id');
    this.product = this.productsService.getOneProduct(this.product_id);
  }

  ngOnChanges(){

  }
  onWish() {
    this.wishlistService.addToWishlist(this.product);
  }
  onCart() {
    this.cartService.addToCart(this.product);
  }
  onSwitch(product){
    this.product = product;
  }

  init(product){
    console.table(product);
    // console.log(product);
    this.product_id = product.id;
    this.product = this.productsService.getOneProduct(this.product_id);
  }
  

}
