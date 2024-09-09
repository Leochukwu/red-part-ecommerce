import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shops',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './shops.component.html',
  styleUrl: './shops.component.scss'
})
export class ShopsComponent implements OnInit{

  Products: any = [];

  limit: any = 10;
  skip: any = 0;

  length: any;




  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.http.get('https://dummyjson.com/products?limit=' + this.limit + '&skip=' + this.skip).subscribe(
      (res:any) => {
        if(res.products.length > 0){
          this.Products = res.products
        }
        else{
          alert('No more product')
        }
      }, 
      (err:any) => {}
    )
  }

  nextPage(){
    this.skip = this.limit + this.skip
    this.getProduct

  }

  prevPage(){
    if(this.skip > 0){
      this.skip = this.skip - this.limit
      this.getProduct
    }


    
  }



}
