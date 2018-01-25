import { Component, OnInit } from '@angular/core';
import { ItemService } from './../../providers/item.service';

/**
 * Generated class for the ItemsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'items',
  templateUrl: 'items.html'
})
export class ItemsComponent implements OnInit {

  constructor(public itemService: ItemService) {
  }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      console.log(items);
    })
  }

}
