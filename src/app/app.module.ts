import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule,HttpClient} from '@angular/common/http';
// import {AngularFireAuthModule} from '@angular/fire/auth';
// import {AngularFireModule} from '@angular/fire';
// import {AngularFirestoreModule} from '@angular/fire/firestore';
// import {firebaseConfig} from 'src/environments/environment';
// // AngularFireModule.initializeApp(firebaseConfig), AngularFireAuthModule , AngularFirestoreModule
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule , HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy } , HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
