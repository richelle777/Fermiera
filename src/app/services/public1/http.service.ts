import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from 'src/app/class/base-url';
import { element } from 'protractor';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  baseUrl  = new BaseUrl();
  userInfos:any;

  constructor(private _http :HttpClient) { }

  async saveArticleCommande(data){
    this._http.post(this.baseUrl.url+"commandearticle/save",data,this.baseUrl.httOptionsPost).toPromise().then((el)=>{
      console.log('response',el);
      return "save"
    });
  }
  async listArticleCommande(){
    return this._http.get(this.baseUrl.url+"commandearticle/all",this.baseUrl.httOptions).toPromise();
  }
  async listArticles(){
    return this._http.get(this.baseUrl.url+"article/all",this.baseUrl.httOptions).toPromise();
  }

  async listCategories(){
    return this._http.get(this.baseUrl.url+"category/all",this.baseUrl.httOptions).toPromise();
  }
  
  async listFruitsByCat(nomCategorie){
    return this._http.get(this.baseUrl.url+"article/"+nomCategorie+"/"+"searchByCategorie",this.baseUrl.httOptions).toPromise();
  }

  async saveAddress(data){
    this._http.post(this.baseUrl.url+"fermier/save/localisation",data,this.baseUrl.httOptionsPost).toPromise().then((el)=>{
      console.log('response',el);
      return "save"
    }
      
    )
     
    
   
  }

  async commandes(id_user){
    return this._http.get(this.baseUrl.url+"commande/user/"+id_user,this.baseUrl.httOptions).toPromise()
  }



  async getInfoCustomer(email){
    return this._http.get(this.baseUrl.url + "customer/infos/" + email,this.baseUrl.httOptions).toPromise()
  }

  setuserInfos(data){
    this.userInfos = data
  }

  getuserInfos(){
    return this.userInfos
  }




  async deleteArticleFromCommande(idArticle){
    return this._http.get(this.baseUrl.url+"commandearticle/"+idArticle+"/delete",this.baseUrl.httOptions).toPromise()
  }
  async updateArticleFromCommande(qte,article){
    return this._http.get(this.baseUrl.url+qte/article+"/update",this.baseUrl.httOptions).toPromise()
  }

}
