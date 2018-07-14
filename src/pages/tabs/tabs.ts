import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Tab1Page } from '../tab1/tab1';
import { Tab2Page } from '../tab2/tab2';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tabData: any = {};

  tab1 = Tab1Page;
  tab2 = Tab2Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabData.data = 'TabData123';
    console.log(this.tabData)
    console.log(this.tabData.data)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
}
