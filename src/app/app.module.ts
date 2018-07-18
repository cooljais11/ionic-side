import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { Tab1Page } from '../pages/tab1/tab1';
import { Tab2Page } from '../pages/tab2/tab2';
import { SelectedCommunityPage } from '../pages/selected-community/selected-community';
import { FollowedCommunityPage } from '../pages/followed-community/followed-community';
import { ChatDetailsPage } from '../pages/chat-details/chat-details';
import { UserRegistrationProvider } from '../providers/user-registration/user-registration';
import { RegistrationPage } from '../pages/registration/registration';
import { UserService } from '../providers/user-service/user-service';
import { JournalPage } from '../pages/journal/journal';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SocialSharingMock } from '../pages/home/SocialShareMock';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SettingsPage,
    TabsPage,
    Tab1Page,
    Tab2Page,
    SelectedCommunityPage,
    FollowedCommunityPage,
    ChatDetailsPage,
    RegistrationPage,
    JournalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SettingsPage,
    TabsPage,
    Tab1Page,
    Tab2Page,
    SelectedCommunityPage,
    FollowedCommunityPage,
    ChatDetailsPage,
    RegistrationPage,
    JournalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserRegistrationProvider,
    UserService,
    { provide: SocialSharing, useClass: SocialSharingMock }
  ]
})
export class AppModule {}
