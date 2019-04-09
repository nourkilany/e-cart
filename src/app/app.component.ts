import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Product } from './models/product.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
	product: Product[];

	constructor(private products:ProductsService){
	}
	
	ngOnInit(){
		this.product = this.products.getProducts();
		this.product.forEach((product) => {
			product.wished = JSON.parse(localStorage.getItem(product.id)) || false;
			product.purchased = JSON.parse(localStorage.getItem(product.id)) || false;
		});
		this.products.setProducts(this.product);
	}
}
