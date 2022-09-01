import { CommonfunctionService } from 'src/app/services/commonfunction.service';
import { Component, OnInit } from '@angular/core';
import { WoocommerceService } from 'src/app/services/woocommerce.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: any;
  constructor(private WC: WoocommerceService, private CFS: CommonfunctionService) { }

  ngOnInit() {
    this.WC.getAllStoreProducts().subscribe((data) => {
      this.products = data;
      console.log('All Products from Store: ', this.products);
    });
  }

  searchFilterProducts(){
    this.CFS.searchAndFilterMyProducts();
  }

}
