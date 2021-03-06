import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ViewPageComponent } from './components/view-page/view-page.component';
import { ProductsService } from './services/products.service';
import { WishlistService } from './services/wishlist.service';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RelatedProductsComponent } from './components/related-products/related-products.component';
import { LoginComponent } from './components/login/login.component';
import { UsernameComponent } from './components/username/username.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WishlistComponent,
    ShoppingCartComponent,
    ProductsComponent,
    ProductItemComponent,
    ViewPageComponent,
    CheckoutComponent,
    RegisterComponent,
    NotFoundComponent,
    RelatedProductsComponent,
    LoginComponent,
    UsernameComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProductsService, WishlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
