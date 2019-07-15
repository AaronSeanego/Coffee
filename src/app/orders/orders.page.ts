import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../order-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  Orders = [];
  Name;
  Quantity;
  Sugar;
  Milk;
  TotalPrice;
  index;
  constructor(public orderService:OrderServiceService) {
    this.Name = this.orderService.setCoffeeName();
    this.Orders = this.orderService.getOrders();
    this.Quantity = this.orderService.getQuantity();
    this.TotalPrice = this.orderService.setTotalPrice();
  }

  ngOnInit() {
  }

  setSugar(event){
    this.Sugar = event.detail.value;
    this.getTotal();
  }

  setMilk(event){
    this.Milk = event.detail.value;
  }

  getNewQuantity(){
    this.Quantity = this.orderService.AddCounter();
  }

  getMinusCounter(){
    this.Quantity = this.orderService.minusCounter();
  }

  getTotal(){
    this.TotalPrice = this.orderService.setTotal(this.Sugar,this.Milk,this.Quantity);
  }

  setMakeOrders(){
    this.orderService.MakeOrders(this.Name,this.Quantity,this.TotalPrice);
  }
}
