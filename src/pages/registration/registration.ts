import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserRegistrationProvider } from '../../providers/user-registration/user-registration';
import { UserService } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  email: string;
  isRegistered: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private userRegistration: UserRegistrationProvider,
  private userService: UserService) {
    console.log("Calling User Service....")
    this.userService.getData();
  }

  register() {
    this.userRegistration.saveUserRegistration();
    this.userRegistration.isRegisteredUser(this.email).then(value => this.isRegistered = value);
  }

}
