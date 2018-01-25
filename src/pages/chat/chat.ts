import { Component, enableProdMode } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface Item { username: string; message: string; }

enableProdMode();
@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  private itemsCollection: AngularFirestoreCollection<Item>;

  items: Observable<any[]>;

  username: string = '';
  message: string = '';

  constructor(
    private db: AngularFirestore,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    // this.items = this.db.collection('chats').valueChanges();
    this.itemsCollection = this.db.collection<Item>('chats');
    this.items = this.itemsCollection.valueChanges();
  }

  sendMessage(username, message) {
    const item: Item = { username, message };
    this.itemsCollection.add(item);
    this.message = '';
  }

  ionViewDidLeave(){
    console.log('user is about to go');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}

