import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular/umd';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams, 
        public viewCtrl: ViewController) {}

    dismiss() {
        this.viewCtrl.dismiss();
    }

    saveTheme(theme) {
        console.log(theme);
        
    }
}
