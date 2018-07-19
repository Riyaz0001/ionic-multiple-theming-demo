import { SettingsProvider } from '../providers/settings/settings';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular/umd';
import { Config } from 'ionic-angular/umd';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  selectedTheme: String;

    // theme color in hex
    themeStatusBarColorObj: any = [
        {
            themeCss: 'light-theme',
            colorHex: '#eeeeee'
        },
        {
            themeCss: 'dark-theme',
            colorHex: '#333333'
        },
        {
            themeCss: 'orange-theme',
            colorHex: '#a96d13'
        },
        {
            themeCss: 'lushMeadow-theme',
            colorHex: '#00654a'
        }
    ]; 

    constructor(
        platform: Platform, 
        private statusBar: StatusBar, 
        private splashScreen: SplashScreen, 
        private settings: SettingsProvider,
        public config: Config) {
            
            platform.ready().then(() => {
                // get current theme
                this.settings.getCurrentTheme().subscribe(val => {
                    this.selectedTheme = val;

                    // set StatusBar Color
                    let temp = this;
                    this.themeStatusBarColorObj.forEach((item, index) => { 
                        if(item.themeCss == temp.selectedTheme) {
                            this.statusBar.overlaysWebView(false);
                            this.statusBar.backgroundColorByHexString(item.colorHex);
                        }
                    });
                });

                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                // this.statusBar.overlaysWebView(false);
                // this.statusBar.backgroundColorByHexString(this.defaultStatusbarColor);
                this.splashScreen.hide();
            });
    }
}

