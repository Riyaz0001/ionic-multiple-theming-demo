import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Config } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsProvider } from '../providers/settings/settings';
import { HttpClientModule } from '@angular/common/http';
import { ModalPage } from '../pages/modal/modal';

import { ModalScaleUpEnterTransition } from '../classes/scale-up-enter.transition';
import { ModalScaleUpLeaveTransition } from '../classes/scale-up-leave.transition';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsProvider
  ]
})
export class AppModule {
    constructor(public config: Config) {
        this.setCustomTransitions();
    }

    private setCustomTransitions() {
        this.config.setTransition('modal-scale-up-leave', ModalScaleUpLeaveTransition);
        this.config.setTransition('modal-scale-up-enter', ModalScaleUpEnterTransition);
    }
}
