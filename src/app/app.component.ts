import { LanguageService } from './services/language.service';
import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  param = {value: 'world'};
 
  constructor(translate: TranslateService,private lngs:LanguageService) {
    translate.setDefaultLang('fr');
    translate.addLangs(['en','fr']);
    translate.use('fr');
    translate.get('HELLO', {value: 'world'}).subscribe((res: string) => {
    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|fr/) ? browserLang : 'fr');
    });
    console.log(this.lngs.getLanguages())

  }
  
}
