import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-shopping-cart",
  template: `
    <div>
      <a class="nav-link" href="javascript:;;">
        <i class="fa fa-shopping-cart">
          <span class="mt-1"> 0</span>
        </i>
      </a>
    </div>
  `,
  styleUrls: ["./shopping-cart.component.scss"]
})
export class ShoppingCartComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
