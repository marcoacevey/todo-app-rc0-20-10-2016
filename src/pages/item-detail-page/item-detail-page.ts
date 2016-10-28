import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ItemDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-item-detail-page',
  templateUrl: 'item-detail-page.html'
})
export class ItemDetailPage {

  title: string;
  desc: string;
  done: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    let selectedItem = this.navParams.get('selectedItem');

    this.title = selectedItem.title;
    this.desc = selectedItem.desc;
    this.done = selectedItem.done;
  }

  back() {
    this.navCtrl.pop();
  }

}
