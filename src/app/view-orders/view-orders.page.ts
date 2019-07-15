import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../order-service.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.page.html',
  styleUrls: ['./view-orders.page.scss'],
})
export class ViewOrdersPage implements OnInit {
  public orders = [];
  constructor(public viewOrders:OrderServiceService) {
    this.orders = this.viewOrders.getMadeOrders();
  }

  ngOnInit() {
  }

}
