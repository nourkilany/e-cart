import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-wishlist",
  template: `
    <div>
      <a class="nav-link" href="javascript:;;">
        <i class="fa fa-heart">
          <span class="mt-1"> 0</span>
        </i>
      </a>
    </div>
  `,
  styleUrls: ["./wishlist.component.scss"]
})
export class WishlistComponent implements OnInit {
  wishlistCounter: number = 0;
  constructor() {}

  ngOnInit() {}
}
