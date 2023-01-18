import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {   

  Info = new FormGroup({
    nom: new FormControl(),
    email: new FormControl(),
    motDePasse: new FormControl(),
  });

  constructor() { }
  user:any;
  userbody:any;
  ngOnInit() {
    const retrieve=localStorage.getItem('customer');
    // @ts-ignore
    this.user=JSON.parse(retrieve);
    this.userbody=this.user.body;
  }
  async save(){
    let userInfo={"nom":this.Info.value.nom,"email":this.Info.value.email,"motDePasse":this.Info.value.motDePasse}
   
  }
}
