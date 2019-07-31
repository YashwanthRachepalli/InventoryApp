import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  flag: boolean = false;
  products: any[];
  product;

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private cartService: CartService) { }


  ngOnInit() {
    this.getProducts();
    this.route.paramMap.subscribe(params => {
      this.product = this.products.find(product => product.productId == params.get('productId'));
    });
  }

  getProducts(){
    this.products = this.productsService.products;
  }
  addToCart(product: object){
    this.flag = true;
    this.cartService.addItemsIntoCart(product);
    console.log(this.cartService.data);
  }

}
