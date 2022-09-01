import { Component, OnInit } from '@angular/core';
import { WoocommerceService } from 'src/app/services/woocommerce.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.page.html',
  styleUrls: ['./tags.page.scss'],
})
export class TagsPage implements OnInit {

  tags: any;
  constructor(private WC: WoocommerceService) { }

  ngOnInit() {
    this.WC.getAllTags().subscribe((data) => {
      this.tags = data;
      console.log('All the Tags: ', this.tags);
    });
  }

}
