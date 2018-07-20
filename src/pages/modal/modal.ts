import { SettingsProvider } from '../../providers/settings/settings';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

    selectedTheme: String;
    themeCode: string;

    themeObject: any = [
        {
            themeName: 'Light',
            // colorImage: '../../assets/imgs/light.jpg', // only for ionic serve or run
             colorImage: '/android_asset/www/assets/imgs/light.jpg', // only for ionic build 
            cssValue: 'light-theme',
            checked: true
        },
        {
            themeName: 'Dark',
            // colorImage: '../../assets/imgs/dark.jpg', // only for ionic serve or run
            colorImage: '/android_asset/www/assets/imgs/dark.jpg', // only for ionic build 
            cssValue: 'dark-theme',
            checked: false
        },
        {
            themeName: 'Orange',
            // colorImage: '../../assets/imgs/orange.jpg', // only for ionic serve or run
            colorImage: '/android_asset/www/assets/imgs/orange.jpg', // only for ionic build 
            cssValue: 'orange-theme',
            checked: false
        },
        {
            themeName: 'Lush Meadow',
            // colorImage: '../../assets/imgs/lushMeadow.jpg', // only for ionic serve or run
            colorImage: '/android_asset/www/assets/imgs/lushMeadow.jpg', // only for ionic build 
            cssValue: 'lushMeadow-theme',
            checked: false
        }
    ];

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams, 
        public viewCtrl: ViewController,
        private settings: SettingsProvider) {

            this.settings.getCurrentTheme().subscribe(val => {
                this.selectedTheme = val;

                let temp = this;
                this.themeObject.forEach((item) => {
                    if(item.cssValue == temp.selectedTheme) {
                        item.checked = true;
                   
                    } else {
                        item.checked = false;
                    }
                });
            });
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    setThemeName(tName){
        this.selectedTheme = tName;
    }

    saveTheme() {
        console.log('You are Selected theme is: ' + this.selectedTheme);

        //this.selectedTheme = themeName;
        this.settings.setupCurrentTheme(this.selectedTheme);
        return this.dismiss();
    }

    
}
