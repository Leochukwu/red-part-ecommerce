import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,  HttpClientModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit{
  
  Products: any = []
  item: any;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.http.get('https://dummyjson.com/products').subscribe(
      (res:any)=>{
        console.table(res.products)
        this.Products = res.products
      },
      (err: any)=>{}
    )
  }

}
