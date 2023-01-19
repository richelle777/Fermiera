import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {registerLocaleData} from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import localEn from '@angular/common/locales/en';
import { LanguageService } from './services/language.service';
// import {} from '';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule , HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy } , HttpClient,LanguageService],
  bootstrap: [AppComponent],
  exports: [
    TranslateModule
  ]
})
export class AppModule {}


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
