import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core'; 
@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate:TranslateService) { }


  getLanguages(){
    return [
      {value:'fr',text:'francais'},
      {value:'en',text:'anglais'},
    ]
  }

  setLanguage(lang){
    this.translate.use(lang)
  }
}
