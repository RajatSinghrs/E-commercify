import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit{
  @ViewChild('addProduct') addProductForm!: NgForm;
  productData: undefined | product ;
  productMessage: undefined | string ;
  constructor(private route: ActivatedRoute, private product: ProductService, private router:Router){}
  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id')
    // console.warn(productId)
    productId && this.product.getProduct(productId).subscribe((data)=>{
      // console.warn(data)
      this.productData=data;
    });
  }
  submit(data:product){
    // console.warn(data)
    if(this.productData){
      data.id=this.productData.id;
    }
    this.product.updateProduct(data).subscribe((result)=>{
      this.resetForm();
      if(result){
        this.productMessage="Product has been updated";
      }
    });
    setTimeout(()=>{
      this.productMessage=undefined;
      this.router.navigate(['/seller-home']);
      
    },3000)
  }
  resetForm(){
    if (this.addProductForm) {
      this.addProductForm.resetForm();
    }
  }
}
