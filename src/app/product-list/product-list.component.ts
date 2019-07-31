import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : any;
  count : number;
  constructor(private productsService: ProductsService, private cartService : CartService, private userService: UserService) { }
  
  ngOnInit() {
    this.getHeroes();
    this.cartService.getItemsInCart().subscribe( list => {
      console.log(list);
      this.count = list.length;
    })

    this.userService.getUserDetails().subscribe( user => {
      console.log(user);
    })

  }

  getHeroes():void{
    this.products= this.productsService.products;
  };

}
