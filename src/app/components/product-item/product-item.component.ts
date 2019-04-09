import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { EventEmitter } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  
  constructor(private wishlistService:WishlistService) { }

  ngOnInit() {
  }

  onWish(){
    this.wishlistService.addToWishlist(this.product);
  }

}
