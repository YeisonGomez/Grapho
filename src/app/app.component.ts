/// <reference path="WikitudePlugin.d.ts" />
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      
      WikitudePlugin._sdkKey = "SUmO1hz0KNXsiTAFp/L+INGGtMC4HIq+8Zio11BxnSYaj0JEE2qdFTfM4JH6V0t6AuyGunNYL6GrDvd87Tr/36knWvpmYufl4bsC8xo6KPy2GgakJyIGqixwMd8TSGl44AjNB/9zrffpnmNrKglyCY5TAGlAmFq4csdkoIwBgodTYWx0ZWRfX/EIV90kPa+U9K2avlwyqyL9awafoOmXHfhlkACYhphD3jOgE40Z8Oe00/xdNdfDfOKo9Dj9Hfl4zjGGDICniqlIAStQ/Z56niaecpfYiUyaQWnMzb46TsToDipp2HDsLljCGEPnO4POwy2o6Io+nlQQ2zH1IFui0X77iWLkdEEtjDv+sxKAt98fcHMsPOeaeWCFMUosRD0E0yVTAaOFAH0xfIzeorJRis+3+iHeIULcfJokgKbQtN0kFAlNZxK032440uT65lE8J72t6TAzRZj9Gk3zoGh8Ye66MsNJfEmq598vSL8TJiM31G1QG9wwaaudx5cKmFVGWRi1JePP7dpSuOBtzjZqnnZ8m4lzY2RiOE2+S51PGlaTXN8KzvlZv1gc0mdvUQBp0/EodFXiU/Z9YRqAQJKJ/b79KZNBGI7JaxJU9b/+UgUPnU0sfJ2sdQmwU/DJAsAGUyDA7Tzid2mLD4QzAbzTzs4pxnnsCKKcdX2SBTnUkM6X34BfY55dCSkrbrzEzon0";
      
      WikitudePlugin.isDeviceSupported(
          function(success) {
            console.log("Your platform supports AR/Wikitude. Have fun developing!!");
          },
          function(fail) {
            console.log("Your platform failed to run AR/Wikitude: "+fail);
          },
          [WikitudePlugin.FeatureGeo] // or WikitudePlugin.Feature2DTracking 
      );                  

      WikitudePlugin.setOnUrlInvokeCallback(function(url) {
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

      WikitudePlugin.onWikitudeOK = function() {
          console.log("Things went ok.");
      }
     
      WikitudePlugin.onWikitudeError = function() {
          console.log("Something went wrong");
      }

    });
  }
}
