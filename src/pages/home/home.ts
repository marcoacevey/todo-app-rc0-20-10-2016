import { DataService } from './../../providers/data-service';
import { ItemDetailPage } from './../item-detail-page/item-detail-page';
import { Component } from '@angular/core';

import { ItemSliding, ToastController } from 'ionic-angular';

import { NavController, ModalController } from 'ionic-angular';
import { AddItemPage } from '../add-item-page/add-item-page';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Array<{ title: string, desc: string, done: boolean }> = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: DataService, public toastCtrl: ToastController) {

    this.dataService.getData()
      .then((todos) => {
        if (todos) {
          this.items = JSON.parse(todos);
        }
      });
  }

  ionViewDidLoad() {

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
    this.dataService.saveData(this.items);
    this.showToast('Tarefa adicionada com sucesso :)');
  }

  setItemDone(index: number, slidingItem: ItemSliding) {
    this.items[index].done = !this.items[index].done;
    this.dataService.saveData(this.items);
    slidingItem.close();
    this.showToast('Tarefa Alterada com sucesso.');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
    this.dataService.saveData(this.items);
    this.showToast('Tarefa removida com sucesso.');
  }

  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {
      selectedItem: item
    });
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2500
    });

    toast.present();
  }
}
