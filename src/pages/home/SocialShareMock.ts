import { SocialSharing } from "@ionic-native/social-sharing";


export class SocialSharingMock extends SocialSharing {

  share(message, subject, file, url) {
    return new Promise((resolve, reject) => {
      resolve(message);
    })
  }
}
