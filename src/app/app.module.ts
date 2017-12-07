import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule }    from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TopicPage } from '../pages/topic/topic';
import { ListTopicsPage } from '../pages/list-topics/list-topics';
import { ARView } from '../pages/ar-view/ar-view';
import { SharedModule } from '../shared/shared.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ARView,
    TopicPage,
    ListTopicsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    SharedModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ARView,
    TopicPage,
    ListTopicsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
