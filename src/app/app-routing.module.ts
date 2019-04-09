import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ViewPageComponent } from './components/view-page/view-page.component';

const routes: Routes = [
  { path:'', component: ProductsComponent },
  { path: 'products/:id',component: ViewPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
