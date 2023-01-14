import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from 'src/app/class/base-url';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl  = new BaseUrl();
  constructor(private _http :HttpClient) { }
  async listArticles(){
    return this._http.get(this.baseUrl.url+"article/all",this.baseUrl.httOptions).toPromise();
  }
  async listCategories(){
    return this._http.get(this.baseUrl.url+"categorie/all",this.baseUrl.httOptions).toPromise();
  }
  async listFruitsByCat(nomCategorie){
    return this._http.get(this.baseUrl.url+"article/"+nomCategorie+"/"+"searchByCategorie",this.baseUrl.httOptions).toPromise();
  }

  async saveAddress(data){
    this._http.post(this.baseUrl.url+"fermier2/localisation/save",data,this.baseUrl.httOptions).toPromise()

  }

  async commandes(id_user){
    return this._http.get(this.baseUrl.url+"commande/user/"+id_user,this.baseUrl.httOptions).toPromise()
  }

}
