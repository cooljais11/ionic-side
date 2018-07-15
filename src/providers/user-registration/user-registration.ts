import { Injectable } from '@angular/core';
import { Storage} from '@ionic/storage';

@Injectable()
export class UserRegistrationProvider {

  constructor(private storage: Storage) {
  }

  saveUserRegistration() {
    let userreg = {email: "user123@.com", username:"User_123", dob:"1980-02-09"}
    this.storage.set(userreg.email, JSON.stringify(userreg));
  }

   isRegisteredUser(emailId: string): Promise<boolean> {
    emailId = "user123@.com";
    return this.storage.get(emailId).then(value => value ? true : false);
  }

  removeRegistered(emailId) {
    this.storage.remove(emailId);
  }

}
