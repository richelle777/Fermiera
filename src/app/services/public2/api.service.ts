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
}
