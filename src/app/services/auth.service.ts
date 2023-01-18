import { ConnexionForm } from './../class/connexion-form';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from 'src/app/class/base-url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl  = new BaseUrl();

  constructor(private _http :HttpClient) { }
  login(connexionForm:ConnexionForm){
    //console.log(connexionForm);
    return this._http.post(this.baseUrl.url+"customer/signin", connexionForm
    )
  }
  register(registerForm){
    console.log(registerForm);
    return this._http.post(this.baseUrl.url+"customer/createaccount", registerForm
    )
  }
  updateCustommer(updateForm){
    return this._http.get(this.baseUrl.url+"update", updateForm)
  }
}
