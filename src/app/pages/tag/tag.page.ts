import { Component, OnInit } from '@angular/core';
import { WoocommerceService } from 'src/app/services/woocommerce.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.page.html',
  styleUrls: ['./tag.page.scss'],
})
export class TagPage implements OnInit {

  products: any;
  constructor(private WC: WoocommerceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const tagId = paramMap.get('tagId');
      console.log('Category ID found: ', tagId);
      this.WC.getProuctsByTag(tagId).subscribe((data) => {
        this.products = data;
        console.log('Single Products by Tags: ',this.products);
      })
    });
  }

}
