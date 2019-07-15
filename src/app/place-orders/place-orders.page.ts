import { Component, OnInit } from '@angular/core';
import {OrderServiceService} from '../order-service.service';

@Component({
  selector: 'app-place-orders',
  templateUrl: './place-orders.page.html',
  styleUrls: ['./place-orders.page.scss'],
})
export class PlaceOrdersPage implements OnInit {
  public orders = [];
  constructor(public newOrder:OrderServiceService) {
    this.orders = this.newOrder.getOrders();
  }

  ngOnInit() {
  }

  setName(name) {
    this.newOrder.getName(name);
  }
  
}
