import { Routes } from '@angular/router';
import { ProductInfoComponent } from './pages/product-info/product-info.component';

export const routes: Routes = [
    {path: "product-info/:id", component: ProductInfoComponent}
];
