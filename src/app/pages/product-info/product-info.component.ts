import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss'
})
export class ProductInfoComponent implements OnInit {

  productId: any;
  productDetails: any;

  constructor(private route: ActivatedRoute, private http: HttpClient){
    this.productId = this.route.snapshot.params['id'];
  }
  
  
  
  ngOnInit(): void {
    this.http.get('https://dummyjson.com/products/' + this.productId).subscribe(
      (res:any)=>{
        this.productDetails = res;
      },
      (err: any)=>{}
    )
  }



}
