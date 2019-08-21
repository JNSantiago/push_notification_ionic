import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FCM } from '@ionic-native/fcm';

import firebase from './../firebaseConf';
import app from './../firebaseConf';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    private fcm: FCM,
    private alertCtrl: AlertController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.pushSetup()
    });
  }

  pushSetup() {
    this.fcm.subscribeToTopic('novamulta');

    this.fcm.getToken().then(token => {
      console.log(token)
      //this.firebase.setFCMToken(token)
    });

    this.fcm.onNotification().subscribe(data => {
      if(data.wasTapped){
        let youralert = this.alertCtrl.create({
          title: data.label,
          message: data.message
        });
        youralert.present();
      } else {
        console.log("Received in foreground");
      };
    });

    this.fcm.onTokenRefresh().subscribe(token => {
      //this.firebase.setFCMToken(token)
    });
  }
}



