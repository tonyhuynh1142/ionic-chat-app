import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import { ListPage } from '../pages/list/list';
import { ItemsComponent } from '../components/items/items';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ItemService } from '../providers/item.service';

var config = {
  apiKey: "AIzaSyAbW0Ee5R00ojl42t-VDKbQrzmv01zBzNg",
  authDomain: "chat-angular-app.firebaseapp.com",
  databaseURL: "https://chat-angular-app.firebaseio.com",
  projectId: "chat-angular-app",
  storageBucket: "chat-angular-app.appspot.com",
  messagingSenderId: "518218911206"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
    ListPage,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItemService
  ]
})
export class AppModule {}
