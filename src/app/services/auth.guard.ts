import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {

  constructor(private auth: AuthService, private router: Router, private alrtCtrl: AlertController){

  }

  canActivate (router, state:RouterStateSnapshot){
    if(!this.auth.isUserAuthenticated){
      this.presentAlert();
      this.router.navigateByUrl('/login');
      return false;
    } else {
      return true;
    }

  }

  presentAlert(){
    let alert = this.alrtCtrl.create({
      header: 'Oops!',
      subHeader: 'You have to login first to view the page!',
      buttons: ['Dismiss']
    }).then((alert) => {
      alert.present();
    });
  }
  
}

