import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { ModalPage } from './modal';

@NgModule({
  declarations: [
    ModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPage),
  ],
})
export class ModalPageModule {}
