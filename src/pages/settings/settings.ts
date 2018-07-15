import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import moment from 'moment';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  dateFilter: string;
  changed: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  dateChanged() {
    this.changed = moment().isSameOrAfter(this.dateFilter,'day');
    this.presentToast();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
