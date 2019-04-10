import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ViewPageComponent } from './components/view-page/view-page.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  { path:'', component: ProductsComponent },
  { path: 'products/:id',component: ViewPageComponent },
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
