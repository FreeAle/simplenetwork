import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonfunctionService {

  constructor(private toastController: ToastController) { }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

async presentToast (message, showButton, position, duration){
  const toast = await this.toastController.create({
    message: message,
    showCloseButton: showButton,
    position: position,
    duration: duration
  });
  toast.present();
}


searchAndFilterMyProducts() {
  // search by all row
  var input, filter, found, table, tr, td, i, j;
  input = document.getElementById("productDataInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("productsContainer");
  tr = table.getElementsByTagName("ion-col");
  for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("ion-row");
      for (j = 0; j < td.length; j++) {
          if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
              found = true;
          }
      }
      if (found) {
          tr[i].style.display = "";
          found = false;
      } else {
          tr[i].style.display = "none";
      }
  }
}


}
