import { TestBed } from '@angular/core/testing';

import { WoocommerceService } from './woocommerce.service';

describe('WoocommerceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WoocommerceService = TestBed.get(WoocommerceService);
    expect(service).toBeTruthy();
  });
});
