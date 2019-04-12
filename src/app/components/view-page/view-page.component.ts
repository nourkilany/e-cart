import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  public product_id: any;
  public similar_products: Product[] = [];
  public products: Product[] = [];
  
  

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private wishlistService: WishlistService,
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.product_id = this.route.params['value'].id;
    this.products.forEach((product => {
      
      if (product.id === this.product_id) {
        this.product = product;
      }
    }))
    this.products.forEach((product)=>{
      if (product.category === this.product.category && product.id !== this.product_id) {
        this.similar_products.push(product);
      }
    })

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

}
