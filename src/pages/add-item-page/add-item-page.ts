import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

/*
  Generated class for the AddItemPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-item-page',
  templateUrl: 'add-item-page.html'
})
export class AddItemPage {

  title: string;
  desc: string;

  constructor(public navCtrl: NavController, public view: ViewController) {

  }

  ionViewDidLoad() {
  }

  saveItem() {

    if (this.title !== '' && this.desc !== '') {

      let newitem = {
        title: this.title,
        desc: this.desc
      };

      this.view.dismiss(newitem);
    }
  }

  close() {
    this.view.dismiss();
  }
}
