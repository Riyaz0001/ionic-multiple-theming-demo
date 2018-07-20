import { SettingsProvider } from '../../providers/settings/settings';
import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    selectedTheme: String;
    themeCode: string;

    constructor(
        public navCtrl: NavController, 
        private settings: SettingsProvider, 
        public alertCtrl: AlertController,
        public modalCtrl: ModalController) {

            let getThemeCode = localStorage.getItem('themeCode');
            if (getThemeCode != null) {
                this.themeCode = getThemeCode;
            
            } else {
                this.themeCode = 'lightTheme';
            }

            this.settings.getCurrentTheme().subscribe(val => this.selectedTheme = val);
        
        }

    changeTheme() {
        let defaultTheme = this.selectedTheme;
        let alert = this.alertCtrl.create();
        alert.setTitle('Choose Themes');
    
        alert.addInput({
            type: 'radio',
            label: 'Light',
            value: 'light-theme',
            checked: (defaultTheme != 'light-theme' ? false : true)
        });
        alert.addInput({
            type: 'radio',
            label: 'Dark',
            value: 'dark-theme',
            checked: (defaultTheme != 'dark-theme' ? false : true),
        });
        alert.addInput({
            type: 'radio',
            label: 'Orange',
            value: 'orange-theme',
            checked: (defaultTheme != 'orange-theme' ? false : true)
        });
        alert.addInput({
            type: 'radio',
            label: 'Lush Meadow',
            value: 'lushMeadow-theme',
            checked: (defaultTheme != 'lushMeadow-theme' ? false : true)
        });

        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: data => {
                this.settings.setupCurrentTheme(data);
            }
        });
        alert.present();
    }



    modalShow() {
        let profileModal = this.modalCtrl.create(ModalPage, {}, {
            showBackdrop: false,
            enableBackdropDismiss: false,
            enterAnimation: 'modal-scale-up-enter',
            leaveAnimation: 'modal-scale-up-leave'
        });
        profileModal.present();
    }

}
