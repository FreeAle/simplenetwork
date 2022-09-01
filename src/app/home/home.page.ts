import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isLogoutShow: boolean = false;
  constructor(private auth: AuthService) {
    this.isLogoutShow = this.auth.isUserAuthenticated;
    //console.log('User Logged In',this.isLogoutShow);
  }

  logOut(){
    this.auth.customerLogOut();
  }

}
