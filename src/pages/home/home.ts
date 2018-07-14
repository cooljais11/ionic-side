import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ChatDetailsPage } from '../chat-details/chat-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  detailPage() {
      this.navCtrl.push(TabsPage)
  }

  chatDetails() {
    this.navCtrl.push(ChatDetailsPage);
  }
 }
