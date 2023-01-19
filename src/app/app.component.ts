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
  lang:any[] = []


  constructor(translate: TranslateService,private lngs:LanguageService) {
    // this.lngs.setLanguage('francais');
    translate.setDefaultLang('fr');
    translate.addLangs(['en','fr']);
    translate.use('fr');
    translate.get('HELLO', {value: 'world'}).subscribe((res: string) => {
    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|fr/) ? browserLang : 'fr');
    });
    this.lang =this.lngs.getLanguages()

  }
  
  Change(lg:string){
    this.lngs.setLanguage(lg)
  }
  handleChange(ev) {
    console.log(ev.target.value);
    
    this.lngs.setLanguage(ev.target.value);
  }
}
