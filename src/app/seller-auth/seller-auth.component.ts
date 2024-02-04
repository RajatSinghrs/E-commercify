import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{
  showLogin=false;
  authError:string='';
  constructor(private sellr :SellerService ){}
  
  ngOnInit():void{
    this.sellr.reloadSeller()
  }
  signUp(data:SignUp):void{
    // console.warn(data);
    this.sellr.userSignUp(data);
  }
  login(data:SignUp) : void{
    this.authError="";
    this.sellr.userLogin(data)
    this.sellr.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or passwords isn't correct";
      }
    })
  }
  openLogin(){
    this.showLogin=true
  }
  openSignUp(){
    this.showLogin=false
  }
}
