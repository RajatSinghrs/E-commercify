import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit{
 @ViewChild('addProduct') addProductForm!: NgForm;
 addProductMsg : string|undefined;

  constructor(private product:ProductService) { }

  ngOnInit(): void { }

  submit(data:product){
    this.product.addProduct(data).subscribe((result)=>{
      console.warn(result)
      if(result){
        this.addProductMsg="Product is successfully added";
      }
      setTimeout(() => {this.resetForm();
        this.addProductMsg=undefined},3000);
      
    });
  }
 resetForm() {
    if (this.addProductForm) {
      this.addProductForm.resetForm();
    }
  } 

}

