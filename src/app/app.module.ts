import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CalcolaPage} from "../pages/calcola/calcola";
import {StoricoPage} from "../pages/storico/storico";
import { PersonaServiceProvider } from '../providers/persona-service/persona-service';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {IonicStorageModule} from "@ionic/storage";


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    CalcolaPage,
    StoricoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    CalcolaPage,
    StoricoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PersonaServiceProvider
  ]
})
export class AppModule {}
