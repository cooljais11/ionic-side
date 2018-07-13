import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Tab1Page } from '../tab1/tab1';
import { Tab2Page } from '../tab2/tab2';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1 = Tab1Page;
  tab2 = Tab2Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
}
