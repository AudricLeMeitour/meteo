import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SelectInfoPage } from '../pages/select-info/select-info';
import { AffichageMeteoPage } from '../pages/affichage-meteo/affichage-meteo';
import { MeteoApiProvider } from '../providers/meteo-api/meteo-api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SelectInfoPage,
    AffichageMeteoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SelectInfoPage,
    AffichageMeteoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MeteoApiProvider
  ]
})
export class AppModule {}
