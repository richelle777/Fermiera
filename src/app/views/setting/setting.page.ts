import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder , Validators , FormControl} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
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
    telephone: new FormControl(),
  });

  constructor(private authService:AuthService,private router:Router) { }
  user:any;
  userbody:any;
  customer:any;
  iduser:any;
  ngOnInit() {
    const retrieve=localStorage.getItem('customer');
    // @ts-ignore
    this.user=JSON.parse(retrieve);
    this.userbody=this.user.body;
  }
   save(){
    let userInfo={"id":this.userbody.id,"nom":this.Info.value.nom,"email":this.Info.value.email,"motDePasse":this.Info.value.motDePasse,"telephone":this.Info.value.telephone};
    console.log(userInfo);
     this.authService.updateCustommer(userInfo).subscribe((data)=>{
      this.customer=data;
      localStorage.setItem("customer", JSON.stringify(this.customer));
      this.router.navigate(['tab/home'])
     })
  }
  toPage(){
    this.router.navigate(['/addresses'])
  }
}
