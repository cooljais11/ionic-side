import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ChatDetailsPage } from '../chat-details/chat-details';
import { SocialSharing } from '@ionic-native/social-sharing';


declare var window: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    isFollowing = false;

  constructor(public navCtrl: NavController,
    private socialSharing: SocialSharing,
    private alertCtrl: AlertController) {

  }

  detailPage() {
    this.navCtrl.push(TabsPage)
  }

  chatDetails() {
    this.navCtrl.push(ChatDetailsPage);
  }

  share() {
    console.log("share...")
    // this.presentConfirm();
    this.socialSharing.share("Demo message", "Demo subject", "", "https://ampersandacademy.com").
      then((data) => {
        this.presentConfirm();
      }).catch(() => {
        // Error!
        alert("Share failed");
      });
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Friends to Share',
      // message: 'Do you want to buy this book?',
      inputs: [
        {
           name: 'gpsxy',
           type:'checkbox',
           checked:false,
           label:'Sharad',
           value:"true"
        },
        {
          name: 'gpsxy',
          type:'checkbox',
          checked:false,
          label:'Raghavan',
          value:"true"
       }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Share',
          handler: () => {
            console.log('Share clicked');
          }
        }
      ]
    });
    alert.present();
  }


  presentCheckBox() {

  }
}
