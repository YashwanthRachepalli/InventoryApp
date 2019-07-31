import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: any[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.products = this.cartService.data;
  }
  
}
