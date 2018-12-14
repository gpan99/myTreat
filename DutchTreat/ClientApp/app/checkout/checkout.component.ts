import { Component } from "@angular/core";
import { DataService } from '../shared/dataService';
import { Router } from "@angular/router";
import { OrderItem } from '../shared/orderItem';

@Component({
  selector: "checkout",
  templateUrl: "checkout.component.html",
  styleUrls: ['checkout.component.css']
})
export class Checkout {

  constructor(public data: DataService, public router: Router) {
  }
  
  errorMessage: string = "";

  onCheckout() {
    this.data.checkout()
      .subscribe(success => {
        if (success) {
          this.router.navigate(["/"]);
        }
      }, err => this.errorMessage = "Failed to save order");
  }
  onItemDelete(item: OrderItem) {     
      this.data.DeleteFromOrder(item);
      if (this.data.order.items.length == 0) {
          this.router.navigate(["/"]);
      }
  }
}