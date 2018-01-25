import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ServicesItemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemService {

  itemsCollection : AngularFirestoreCollection<Item>;

  items: Observable<Item[]>;

  constructor(public db: AngularFirestore) {
    this.items = this.db.collection('items').valueChanges();

  }

  getItems() {
    return this.items;
  }

}

interface Item {
  id?: string;
  title?: string;
  description?: string;
}
