import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    {
      productId: '153',
      imageURL: 'assets/phone1.jpeg',
      name : 'Phone XL',
      description : 'A large phone with one of the best screens',
      price : 800,
      noOfItems : 5
    }, 
    {
      productId: '159',
      imageURL: 'assets/phone2.jpeg',
      name : 'Phone Mini',
      description: 'A mini phone with one of the best screens',
      price : 500,
      noOfItems : 6
    }, 
    {
      productId: '1530',
      imageURL: 'assets/phone3.jpeg',
      name : 'Phone Standard',
      description : '',
      price : 400,
      noOfItems : 9
  },
  {
    productId: '156',
    imageURL: 'assets/phone1.jpeg',
    name : 'Phone XL',
    description : 'A large phone with one of the best screens',
    price : 800,
    noOfItems : 2
  },
  {
    productId: '157',
    imageURL: 'assets/phone1.jpeg',
    name : 'Phone XL',
    description : 'A large phone with one of the best screens',
    price : 800,
    noOfItems : 3
  },
  {
    productId: '158',
    imageURL: 'assets/phone1.jpeg',
    name : 'Phone XL',
    description : 'A large phone with one of the best screens',
    price : 800,
    noOfItems : 4
  },
  {
    productId: '159',
    imageURL: 'assets/phone1.jpeg',
    name : 'Phone XL',
    description : 'A large phone with one of the best screens',
    price : 800,
    noOfItems : 7
  },
  {
    productId: '160',
    imageURL: 'assets/phone1.jpeg',
    name : 'Phone XL',
    description : 'A large phone with one of the best screens',
    price : 800,
    noOfItems : 1
  },
  {
    productId: '161',
    imageURL: 'assets/phone1.jpeg',
    name : 'Phone XL',
    description : 'A large phone with one of the best screens',
    price : 800,
    noOfItems : 2
  }
];
  constructor() { }
}
