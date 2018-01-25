import { ChatPage } from './../chat/chat';
import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string = '';

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {

  }

  showAlert(title: string, message: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  loginUsername() {
    if (/^[a-zA-Z0-9]+$/.test(this.username)) {
      this.navCtrl.push(ChatPage, {
        username: this.username
      })
    } else {
      this.showAlert('Error', 'Invalid Username');
    }
  }

}
