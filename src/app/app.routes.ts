import { Routes } from '@angular/router';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopsComponent } from './pages/shops/shops.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: "product-info/:id", component: ProductInfoComponent},
    {path: 'shops', component: ShopsComponent}

];
