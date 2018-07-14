import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  tabData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabData = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }

}
