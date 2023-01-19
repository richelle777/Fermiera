import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core'; 
@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate:TranslateService) { }


  getLanguages(){
    return [
      {value:'fr',text:'Francais'},
      {value:'en',text:'Anglais'},
    ]
  }

  setLanguage(lang){
    this.translate.use(lang);
    // console.log('language changed',lang)
  }
}
