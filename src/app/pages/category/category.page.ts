import { Component, OnInit } from '@angular/core';
import { WoocommerceService } from 'src/app/services/woocommerce.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  products: any;
  constructor(
    private WC: WoocommerceService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const catId = paramMap.get('catId');
      console.log('Category ID found: ', catId);
      this.WC.getProductsByCategory(catId).subscribe((data) => {
        this.products = data;
        console.log('Single Products by Category: ',this.products);
      })
    });
  }

}
