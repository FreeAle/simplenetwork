import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  quantityUpdatedProducts: any;
  constructor(private storage: Storage) { }
public cartItems = new BehaviorSubject(0);

updateCart(){
  let newItem = this.cartItems.getValue();
  this.cartItems.next(newItem+1);
}

keepCartItemsOnRefresh(){
  let items = 0;
  this.storage.forEach((data)=>{
    items +=1;
  }).then(() =>{
    this.cartItems.next(items);
  });
}

}
