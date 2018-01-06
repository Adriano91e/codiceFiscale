import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalcolaPage } from './calcola';

@NgModule({
  declarations: [
    CalcolaPage,
  ],
  imports: [
    IonicPageModule.forChild(CalcolaPage)
  ],
})
export class CalcolaPageModule {}
