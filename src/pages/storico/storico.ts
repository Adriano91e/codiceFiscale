import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from "@ionic/storage";

/**
 * Generated class for the StoricoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storico',
  templateUrl: 'storico.html',
})
export class StoricoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad StoricoPage');
  }


}
