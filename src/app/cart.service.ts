import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public data: Array<any>=[];
  public itemsInCart: Subject<Array<any>> = new Subject<Array<any>>();
  constructor() { }

  addItemsIntoCart(product) {
    this.data.push(product);
    this.itemsInCart.next(this.data);
  }

  getItemsInCart(): Observable<any> {
    return this.itemsInCart.asObservable();
  }
}
