import { Component, OnInit } from '@angular/core';
import { WoocommerceService } from 'src/app/services/woocommerce.service';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.page.html',
  styleUrls: ['./customerprofile.page.scss'],
})
export class CustomerprofilePage implements OnInit {

  /* add these so that page.html works perfectly */
  customerId:any;
  customerData: any = {
    avatar_url: 'not found'
  }
  constructor(private WC: WoocommerceService) {
    
   }

  ngOnInit() {
    let isUserLoggedIn = localStorage.getItem('currentUserId');
    this.WC.getCustomerData(isUserLoggedIn).subscribe((data)=>{
      this.customerData = data;
      console.log('Customer Data: ',this.customerData);
    })
  }

}
