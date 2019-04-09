import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  products:Product[] = [];
  private wishCount: number = 0;
  observable: BehaviorSubject<any> = new BehaviorSubject(0);
  
  constructor() { }

  addToWishlist(product:Product){
    this.products.push(product);
    this.observable.next(product.id);
    product.wished = true;
    localStorage.setItem(product.id, "true"); 
  }

  getWishlist(){
    return this.products;
  }

  getWishlistCount(){
    return this.products.length;
  }
  
}
