import { Component, OnInit } from '@angular/core';
import { WoocommerceService } from 'src/app/services/woocommerce.service';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { CommonfunctionService } from 'src/app/services/commonfunction.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  cartItems: number = 0;
  product: any;
  constructor(
    private WC: WoocommerceService,
    private activatedRoute: ActivatedRoute,
    private storage: Storage,
    private CFS: CommonfunctionService,
    private cartService: CartService
    ) {

      // remove the current order saved in local storage
      this.storage.remove('currentOrderData');
      //this.storage.clear();
      //localStorage.clear();
      this.cartService.keepCartItemsOnRefresh();
     }

  ngOnInit() {

    this.cartService.cartItems.subscribe((value) =>{
      this.cartItems = value;
    })

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const pId = paramMap.get('pId');
      console.log('Product ID found: ', pId);
      this.WC.getSingleProduct(pId).subscribe((data) => {
        this.product = data;
        console.log('Single Product: ',this.product);
      })
    });
  }

  addToCart(){

    this.storage.get(`product_${this.product.id}`).then( data =>{
        if(data){
          this.CFS.presentToast('Item already Exist', true, 'bottom',2000);
        } else {
          this.CFS.presentToast('Item added to cart', true, 'bottom',2000);
          this.storage.set(`product_${this.product.id}`, JSON.stringify(this.product)).then(() => {
           this.cartService.updateCart(); 
          });
        }
    });

    console.log('Add to cart button is clicked');
  }

}
