import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  customerList: User[] = [new User('Yashwanth01', 'targets@2019', 'customer',1),
                  new User('Raj123', 'targets@2019', 'customer',2)]
  supplierList = [new User('Yashwanth01', 'targets@2019', 'supplier',1),
                  new User('Raj123', 'targets@2019', 'supplier',2)]
  adminList = [ new User('Yashwanth01', 'targets@2019', 'admin',1),
                new User('Raj123', 'targets@2019', 'admin',2)]

  constructor() { }

  validateCustomer(username:string, password:string): boolean {
    var valid = false;
    this.customerList.forEach(user =>{
      if((username == user.username) && (password == user.password)) {
        valid = true;
      }
    })
    return valid;
  }

  validateSupplier(username:string, password:string) {
    var valid = false;
    this.supplierList.forEach(user =>{
      if((username == user.username) && (password == user.password)) {
        valid = true;
      }
    })
    return valid;
  }

  validateAdmin(username:string, password:string) {
    var valid = false;
    this.adminList.forEach(user =>{
      if((username == user.username) && (password == user.password)) {
        valid = true;
      }
    })
    return valid;
  }

  addMember(user: User) {
    if (user.memberType == 'supplier') {
      this.supplierList.push(user);
      return
    } else if (user.memberType == 'admin') {
      this.adminList.push(user);
      return
    }
    this.customerList.push(user);
  }

}
