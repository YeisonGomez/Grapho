/// <reference path="../../app/WikitudePlugin.d.ts" />
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ARView page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ar-view',
  templateUrl: 'ar-view.html'
})
export class ARView {

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
  }

  ionViewDidEnter() {

    var startupConfiguration: any = { "camera_position": "back" };

    WikitudePlugin.loadARchitectWorld(
      function(success) {
        console.log("ARchitect World loaded successfully.");
      },
      function(fail) {
        console.log("Failed to load ARchitect World!");
      },
      "www/assets/3_3dModels_1_3dModelOnTarget/index.html", // (1) if you have a IR (Image Recognition) World, use this
      ["ir"],
      <JSON>startupConfiguration
    );  
  }

}
