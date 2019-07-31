import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  flag: boolean = false;
  valid:boolean = false;
  errMsg: string;
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private userService: UserService, private router: Router ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: this.fb.control('',Validators.required),
      password: this.fb.control('',Validators.required),
      memberType: this.fb.control('customer',Validators.required)
    })

    this.registerForm = this.fb.group({
      username: this.fb.control('',Validators.required),
      password: this.fb.control('',Validators.required),
      cnfmpassword: this.fb.control('',Validators.required),
      memberType: this.fb.control('customer',Validators.required)
    }, { validator: this.checkPasswords })

    console.log(this.loginService.supplierList.length);
  }

  enableForm(form:string) {
    if (form == 'register') {
      this.flag = true;
    } else {
      this.flag = false;
    }
  }

  validateCredentials() {
    if (this.loginForm.controls.memberType.value == 'supplier') {
      this.valid = this.loginService.validateSupplier(this.loginForm.controls.username.value, this.loginForm.controls.password.value);
    } else if(this.loginForm.controls.memberType.value == 'customer') {
      this.valid = this.loginService.validateCustomer(this.loginForm.controls.username.value, this.loginForm.controls.password.value);
    } else {
      this.valid = this.loginService.validateAdmin(this.loginForm.controls.username.value, this.loginForm.controls.password.value);
    }
    console.log(this.valid);
    if (this.valid) {
      this.errMsg = '';
      //navigate to home page
      this.userService.setUserDetails(this.buildUserDetails(this.loginForm));
      this.router.navigate(['home']);
    } else {
      this.errMsg = 'credentialas are invalid';
    }
  }

  checkPasswords(group: FormGroup) { 
    let pass = group.controls.password;
    let confirmPass = group.controls.cnfmpassword;
    if(confirmPass.value || confirmPass.dirty) {
      return pass.value === confirmPass.value ? null : { passwordsMisMatch: true }
    }
    return null    
  }

  addMember() {
    console.log(this.registerForm);
    var user = this.registerUserDetails(this.registerForm);
    //navigate to home page
    this.router.navigate(['home']);
  }

  registerUserDetails(form: FormGroup) {
    var userId:number;
    if ( form.controls.memberType.value == 'supplier') {
      userId = this.loginService.supplierList.length+1;
    } else if ( form.controls.memberType.value == 'admin' ) {
      userId = this.loginService.adminList.length+1;
    } else {
      userId = this.loginService.customerList.length+1;
    }
    var user: User = {
      username: form.controls.username.value,
      password: form.controls.password.value,
      memberType: form.controls.memberType.value,
      id: userId
    }
    this.loginService.addMember(user);
    this.userService.setUserDetails(user);
  }

  buildUserDetails(form: FormGroup) {
    var user: User;
    if ( form.controls.memberType.value == 'supplier') {
      user = this.loginService.supplierList.find( user => 
        user.username == form.controls.username.value
      )
    } else if ( form.controls.memberType.value == 'admin' ) {
      user = this.loginService.adminList.find( user => 
        user.username == form.controls.username.value
      )
    } else {
      user = this.loginService.customerList.find( user => 
        user.username == form.controls.username.value
      )
    }
    return user;
  }

}
