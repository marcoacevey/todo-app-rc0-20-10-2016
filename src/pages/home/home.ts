import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { AddItemPage } from '../add-item-page/add-item-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Array<{ title: string, desc: string }>;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    this.items = [
      {
        title: 'Tarefa 1',
        desc: 'Descrição tarefa 1.'
      }, {
        title: 'Não reprovar no TCC',
        desc: 'Fazendo o TCC correto e levando o professor marco para almoçar no bokas!'
      }
    ];
  }

  addItem() {
    let addModal = this.modalCtrl.create(AddItemPage);

    addModal.onDidDismiss((item) => {
      if (item) {
        this.saveItem(item);
      }
    });

    addModal.present();
  }

  saveItem(item) {
    this.items.push(item);
  }

}
