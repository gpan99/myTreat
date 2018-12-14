import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductList } from "./shop/productList.component";
import { Cart } from "./shop/cart.component";
import { Shop } from "./shop/shop.component";
import { Checkout } from "./checkout/checkout.component";
import { Login } from "./login/login.component";
import { DataService } from "./shared/dataService"
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MyErrorStateMatcher } from './form/inputerror.component';


let routes = [
  { path: "", component: Shop },
  { path: "checkout", component: Checkout },
  { path: "login", component: Login },
  //{ path: "form", component: MyErrorStateMatcher }
];

@NgModule({
  declarations: [
      AppComponent, ProductList, Cart, Shop, Checkout, Login//, MyErrorStateMatcher
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: false // for Debugging of the Routes
    })
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
