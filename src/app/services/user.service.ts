import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userDetails: Subject<User> = new Subject<User>();

  getUserDetails() {
    return this.userDetails.asObservable();
  }
  
  setUserDetails(user: User) {
    this.userDetails.next(user);
  }

}
