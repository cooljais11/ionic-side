import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SelectedCommunityPage } from '../selected-community/selected-community';
import * as _ from 'lodash';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  items1:Array<{title: string, note: string, icon: string}>;
  public queryText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    console.log(this.selectedItem)

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 5; i++) {
      this.items.push({
        title: this.icons[i]  + i,
        note: ''+ i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }

    this.items1 = [];
    for (let i = 5; i < 10; i++) {
      this.items1.push({
        title: this.icons[i] + i,
        note: 'item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SelectedCommunityPage, {
      item: item
    });
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }


  update() {
    console.log(this.queryText)
    let queryLower = this.queryText.toLowerCase();
    let filteredData = [];

    // _.forEach(this.allTeamDivisions, td => {
    //   let teams = _.filter(td.divisionTeams, t => (<any>t).name.toLowerCase().includes(queryTextLower));
    //   if (teams.length) {
    //     filteredTeams.push({ divisionName: td.divisionName, divisionTeams: teams });
    //   }
    // });

    _.chain(this.icons)
      .filter(t => t.toString().toLowerCase().includes(queryLower))
      .map(t =>
        filteredData.push({   title: t,
          note: 'item #' ,
          icon: this.icons[Math.floor(Math.random() * this.icons.length)]})
      )
      .value();

    this.items = filteredData;
  }

}
