/// <reference path="WikitudePlugin.d.ts" />
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();

      /** Enter your Wikitude (trial) License Key here. You can register and download your free license key here: http://www.wikitude.com/developer/licenses */      
      WikitudePlugin._sdkKey = "nCaxbEVQ4b+npV0BJDz694riCdy5yYdObICTG0+TtFHNAwGH1Vi62pPmdmJr6DiMjHZuD0RiC81SHy+lbEJgnjEQ5WezNuZwKl+Av0FdUoBZiInNJxfoIqd5VRKZromCAMx9YG+3Flg6m4u24E/WyKvBifrERJbk7Baak1mfgd1TYWx0ZWRfX/PPkNEr2jBza6hQHrydf/BFMVlZWKGGP3GTTVxwc62fay4hxRw36GstK3VZ+xgYwMuanvdNSTWulVMl+opmQhVfp6mtIjCLNCYRsEx3Ie9OrDIXX6GNkZm4mo5eCBNOaWAiyBRCN7/doxRpduCDmuOt822sW25/4J1Licl1DsAcnV5dSiYpIc1lK9fkjxaRLyZScL3YTNMwemucf57eYu6XV2v2qtKny7y0LVyYx2tuTQahbEp0vcll/ZqGE9IXJfsE0UnAbLEdAiOWkM64h4PTKH0AE1hN0ncs03+VN/reYRwzg0aKfRQAvdakzvzWHU6PpkFwMyWVVzxUyAu6FyqjETJ7pf1kSuLbgecHnM1E234TbTb5/HvD2koCv3nWVEKnffuVzYnBukrzyqjOUIMCeCee1dD506dcs5fbrLSCfz+r9m5qoLKg+3D4rkdlSp99BC814F7W6FsNMPjrXkTSTAxzXfN+nxKY0XhCKc8l+sn60nPfdaKlga+CDE1rdgvUCUXa7gnT";

      /** Check if your device supports AR */
      WikitudePlugin.isDeviceSupported(
          function(success) {
            console.log("Your platform supports AR/Wikitude. Have fun developing!!");
          },
          function(fail) {
            console.log("Your platform failed to run AR/Wikitude: "+fail);
          },
          [WikitudePlugin.FeatureGeo] // or WikitudePlugin.Feature2DTracking 
      );                  

      /** The Wikitude AR View creates it's own context. Communication between the main Ionic App and Wikitude SDK works 
       * through the function below for the direction Ionic2 app --> Wikitude SDK 
       * For calls from Wikitude SDK --> Ionic2 app see the captureScreen example in 
       * WikitudeIonic2StarterApp/www/assets/3_3dModels_6_3dModelAtGeoLocation/js/3dmodelatgeolocation.js*/
      // set the function to be called, when a "communication" is indicated from the AR View  
      WikitudePlugin.setOnUrlInvokeCallback(function(url) {

        // this an example of how to receive a call from a function in the Wikitude SDK (Wikitude SDK --> Ionic2)
        if (url.indexOf('captureScreen') > -1) {
            WikitudePlugin.captureScreen(
                (absoluteFilePath) => {
                    console.log("snapshot stored at:\n" + absoluteFilePath);

                    // this an example of how to call a function in the Wikitude SDK (Ionic2 app --> Wikitude SDK)
                    WikitudePlugin.callJavaScript("World.testFunction('Screenshot saved at: " + absoluteFilePath +"');");
                },
                (errorMessage) => {
                    console.log(errorMessage);
                },
                true, null
            );
        } else {
            alert(url + "not handled");
        }
      });

      /**
       * Define the generic ok callback
       */
      WikitudePlugin.onWikitudeOK = function() {
          console.log("Things went ok.");
      }
      
      /**
       * Define the generic failure callback
       */
      WikitudePlugin.onWikitudeError = function() {
          console.log("Something went wrong");
      }

      // Just as an example: set the location within the Wikitude SDK, if you need this (You can get the geo coordinates by using ionic native 
      // GeoLocation plugin: http://ionicframework.com/docs/v2/native/geolocation/
      //WikitudePlugin.setLocation(47, 13, 450, 1);

      /* for Android only
      WikitudePlugin.setBackButtonCallback(
          () => {
              console.log("Back button has been pressed...");
          }
      );                  
      */

    });
  }
}
