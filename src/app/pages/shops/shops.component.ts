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

  limit: any = 12;
  skip: any = 0;
  total: any = 0;
  pageNo: any =1;




  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.http.get('https://dummyjson.com/products?limit=' + this.limit + '&skip=' + this.skip).subscribe(
      (res:any) => {
        if(res.products.length > 0){
          this.Products = res.products
          this.total = res.total
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
    this.getProduct()
    console.log(this.getProduct())

  }

  prevPage(){
    if(this.skip > 0){
      this.skip = this.skip - this.limit
      this.getProduct()
    }
    console.log(this.getProduct())

  }


  //function for pagenition 
  getPageRange(): number[]{
    const rangeSize = 5;

    // Number of pages to be displayed for navigation 
    const totalPages = Math.ceil(this.total / this.limit);

    //Get the current page
    const currentPage = Math.ceil(this.skip / this.limit);

    // putting the display pages for navigation in an array to be able to use FOR LOOP
    const range: any = []

    //Determine the start and end page for the range 
    const start = Math.max(1, currentPage - Math.floor(rangeSize/ 2))
    const end = Math.min(start + rangeSize - 1, totalPages);

    //Populate the range array 
    for(let i = start; i<=end; i++){
      range.push(i);
    }
    console.log(range)

    return range
  }



  goToPage(page: number): void {
    const totalPages = Math.ceil(this.total / this.limit);
    if (page >= 1 && page <= totalPages && page !== this.skip / this.limit) {
      this.skip = (page - 1) * this.limit;  // Adjust skip to jump to the correct page
      this.getProduct();
    }
  }
  

}
