import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {

  tabData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabData = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }

}
