import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListTopicsPage } from '../list-topics/list-topics';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    console.log("Wikitude Ionic 2 Starter App - Version 1.5");
  }

  public openLearn(){
  	this.navCtrl.push(ListTopicsPage);
  }
}
