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
}
