import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionPagesService {
  gest_modal = 0
  
  constructor() { 
  }
  
  SetToModal(value:number){
  this.gest_modal = value ;
  }
  getModal(){
    return this.gest_modal;
  }

}
