
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "./reusable/header/header.component";
import { FooterComponent } from "./reusable/footer/footer.component";
import { ExtrasComponent } from './reusable/extras/extras.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterModule, 
    CommonModule, 
    HttpClientModule, 
    HeaderComponent, 
    FooterComponent, 
    ExtrasComponent, 
    HomeComponent],

    
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }



}
