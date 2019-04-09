import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: "app-wishlist",
  template: `
    <div>
      <a class="nav-link" href="javascript:;;">
        <i class="fa fa-heart">
          <span class="mt-1"> {{wishlistCounter}}</span>
        </i>
      </a>
    </div>
  `,
  styleUrls: ["./wishlist.component.scss"]
})
export class WishlistComponent implements OnInit {
  products:Product[];

  wishlistCounter: number = 0;

  constructor(private wishlist:WishlistService) {}

  ngOnInit() {
    this.products = this.wishlist.getWishlist();
    this.wishlist.observable.subscribe(()=>{
      this.wishlistCounter = this.wishlist.getWishlistCount()
    });
  }
}
