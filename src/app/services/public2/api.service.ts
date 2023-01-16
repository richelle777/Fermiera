import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from 'src/app/class/base-url';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl  = new BaseUrl();


  constructor( private http: HttpClient,
              ) { }

    // ce n'est pas ce que j'utilise, ce que j'utilise est dans public1
    async saveAddress(data){
       this.http.post(this.baseUrl.url+"fermier2/localisation/save",data,this.baseUrl.httOptions).toPromise()
    }

    async listLocalisations(iduser){
      return this.http.get(this.baseUrl.url+"customer/localisation/user/"+iduser,this.baseUrl.httOptions).toPromise()
    }

    async hideLocalisation(idlocalisation){
      this.http.get(this.baseUrl.url+"customer/localisation/hide/"+idlocalisation,this.baseUrl.httOptions).toPromise().then((el)=>{
        console.log('response hiding',el);
        return "save"
    })

  }


  
}
