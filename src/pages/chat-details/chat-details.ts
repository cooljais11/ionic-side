import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FollowedCommunityPage } from '../followed-community/followed-community';

@Component({
  selector: 'page-chat-details',
  templateUrl: 'chat-details.html',
})
export class ChatDetailsPage {

  data: {message: string, component: any};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = {message: "", component: ""};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatDetailsPage');
  }

  sendMessage() {
    // this.navCtrl.push(FollowedCommunityPage);
  }
}
