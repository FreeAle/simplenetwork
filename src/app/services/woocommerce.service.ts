import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WoocommerceService {

  ordersByCustomer:any
  customerData: any;
  orderResp:any;
  paymentGateways:any;
  products: any;
  product: any;
  categories: any;
  tags: any;
  apiURL: string = '';
  siteURL: string = 'https://www.diamonddotz.it';
  woocomPart: string = '/wp-json/wc/v3/';
  consumerKey: string = 'ck_bc980e5a158d17cab2e47620a3018f264fdf5548';
  consumerSecret: string = 'cs_fd6aba23e527f274462ce244756e923a84108b52';

  constructor(private http: HttpClient) { }

  getCustomerData(id){
    this.apiURL = `${this.siteURL}${this.woocomPart}customers/${id}?consumer_key=${this.consumerKey}&consumer_secret=${this.consumerSecret}`;
    console.log('API url for retrive customer: ', this.apiURL);
    this.customerData = this.http.get(this.apiURL); 
    return this.customerData;
  }

  getAllStoreProducts(){
    this.apiURL = `${this.siteURL}${this.woocomPart}products?consumer_key=${this.consumerKey}&consumer_secret=${this.consumerSecret}&per_page=100`;
    console.log('API URL for all store products: ',this.apiURL);
    this.products = this.http.get(this.apiURL);
    return this.products;
  }

  getSingleProduct(pId){
    this.apiURL = `${this.siteURL}${this.woocomPart}products/${pId}?consumer_key=${this.consumerKey}&consumer_secret=${this.consumerSecret}`;
    console.log('API URL for single product: ',this.apiURL);
    this.product = this.http.get(this.apiURL);
    return this.product;
  }

  getAllCategories(){
    this.apiURL = `${this.siteURL}${this.woocomPart}products/categories?consumer_key=${this.consumerKey}&consumer_secret=${this.consumerSecret}`;
    console.log('API URL for all categories: ',this.apiURL);
    this.categories = this.http.get(this.apiURL);
    return this.categories;
  }

  getProductsByCategory(catId){
    this.apiURL = `${this.siteURL}${this.woocomPart}products?category=${catId}&consumer_key=${this.consumerKey}&consumer_secret=${this.consumerSecret}`;
    console.log('API URL Products of a category: ',this.apiURL);
    this.product = this.http.get(this.apiURL);
    return this.product;
  }

  getAllTags(){
    this.apiURL = `${this.siteURL}${this.woocomPart}products/tags?consumer_key=${this.consumerKey}&consumer_secret=${this.consumerSecret}`;
    console.log('API URL for all tags: ',this.apiURL);
    this.tags = this.http.get(this.apiURL);
    return this.tags;
  }

  getProuctsByTag(tagId){
    this.apiURL = `${this.siteURL}${this.woocomPart}products?tag=${tagId}&consumer_key=${this.consumerKey}&consumer_secret=${this.consumerSecret}`;
    console.log('API URL Products of a tag: ',this.apiURL);
    this.product = this.http.get(this.apiURL);
    return this.product;
  }

  getAllPaymentGateWays(){
    this.apiURL = `${this.siteURL}${this.woocomPart}payment_gateways?consumer_key=${this.consumerKey}&consumer_secret=${this.consumerSecret}`;
    console.log('API URL for all paymnet gateways',this.apiURL);
    return new Promise((resolve) => {
      this.paymentGateways = this.http.get(this.apiURL);
      this.paymentGateways.subscribe((data) => {
        resolve(data);
      });
    });
  }

// convert javascript object to x-www-form-urlencoded format
JSON_to_URLEncoded(element, key?, list?) {
  var list = list || [];
  if (typeof element == "object") {
    for (var idx in element)
      this.JSON_to_URLEncoded(
        element[idx],
        key ? key + "[" + idx + "]" : idx,
        list
      );
  } else {
    list.push(key + "=" + encodeURIComponent(element));
  }
  return list.join("&");
}

placeOrder(orderDataObj){
  let headers = new HttpHeaders ({
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  let orderData = this.JSON_to_URLEncoded(orderDataObj);

  this.apiURL = `${this.siteURL}${this.woocomPart}orders?consumer_key=${this.consumerKey}&consumer_secret=${this.consumerSecret}`;
  console.log('API URL for order: ', this.apiURL);

  return new Promise ((resolve) => {
    this.orderResp = this.http.post(this.apiURL,orderData, {headers});
    this.orderResp.subscribe((responseData) => {
      resolve(responseData);
    });
  });

}

getOrdersByCustomer(customerId){
  this.apiURL = `${this.siteURL}${this.woocomPart}orders?customer=${customerId}&consumer_key=${this.consumerKey}&consumer_secret=${this.consumerSecret}`;
  console.log('Orders by a customer: ', this.apiURL);
  this.ordersByCustomer = this.http.get(this.apiURL);
  return this.ordersByCustomer;
}


}
