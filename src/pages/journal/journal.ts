import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JournalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-journal',
  templateUrl: 'journal.html',
})
export class JournalPage {

  pet: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pet = 'puppies';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JournalPage');
  }

}
