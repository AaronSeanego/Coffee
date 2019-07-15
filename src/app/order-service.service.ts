import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  private Categories = [{name : "Cappuccino",coffee_image:"tasse-cappuccino.jpg",price: 43.56,sugar: 1,quantity: 1},
                        {name: "Latte",coffee_image:"latte.jpeg",price:32.43,sugar: 1,quantity: 1},
                        {name: "Espresso",coffee_image:"TenThousandVillages_Mosaic_Coffee1Espresso_header2.jpg",price:20.43,sugar: 1,quantity: 1},
                        {name: "Plain Coffee",coffee_image:"coffee-cup.jpg",price: 15.32,sugar: 1,quantity: 1}
                      ];
  Name;
  Quantity;
  Sugar;
  TotalPrice;
  Milk;
  index;
  total_price;
  addCounter = 1;
  private Orders = [];
  constructor() {}

  getOrders() {
    return this.Categories;
  }

  getName(name){
    this.index = this.Categories.indexOf(name);
    this.Name = name.name;
    this.Quantity = name.quantity;
    this.TotalPrice = name.price;
  }

  setTotalPrice() {
    return this.TotalPrice;
  }

  setCoffeeName(){
    return this.Name;
  }

  getQuantity(){
    return this.Quantity;
  }

  setTotal(Sugar,Milk,Quantity) {
    var sugarPrice = 0.00;
    var milkPrice = 0.00;

    if(Sugar == 2){
      sugarPrice = 2.43;
    }else if(Sugar == 3){
      sugarPrice = 3.54;
    }

    if(Milk == "Yes"){
      milkPrice = 2.43;
    }
    
    this.total_price = (this.TotalPrice + sugarPrice + milkPrice) * Quantity;
    return this.total_price;
  }

  AddCounter(){
    this.Quantity++;
    return this.Quantity;
  }

  minusCounter(){
    if(this.Quantity > 1){
      this.Quantity--;
      return this.Quantity;
    }else if(this.Quantity <= 1){
      return this.Quantity;
    }
  }

  MakeOrders(name,quantity,price){
    this.Orders.push({
      Name:name,
      Coffee_Image: this.Categories[this.index].coffee_image,
      Quantity:quantity,
      Price:price
    })
  }

  getMadeOrders(){
    return this.Orders;
  }

}
