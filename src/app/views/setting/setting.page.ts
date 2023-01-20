import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { LanguageService } from './../../services/language.service';
import { Subscription } from 'rxjs';
import * as i0 from '@angular/core';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  


  constructor(private authService:AuthService,private router:Router) { }
 // user:any;
  //userbody:any;
  customer: any;
  iduser: any;
  initalsetting: any;
  retrieve = localStorage.getItem('customer');
  user = JSON.parse(this.retrieve);
  userbody = this.user.body;
  @ViewChild('popover') popover;
  isOpen = false;

  Info = new FormGroup({
    nom: new FormControl(this.userbody.nom),
    email: new FormControl(this.userbody.email),
    motDePasse: new FormControl(this.userbody.motDePasse),
    telephone: new FormControl(this.userbody.telephone),
  });
  onTranslationChange: Subscription | undefined;
  onLangChange: Subscription | undefined;
  onDefaultLangChange: Subscription | undefined;

  ngOnInit() {
    const retrieve = localStorage.getItem('customer');
    // @ts-ignore
    this.user = JSON.parse(retrieve);
    this.userbody = this.user.body;
    const initials = localStorage.getItem('initial');
    this.initalsetting = initials;
  }
  save() {
    let userInfo = { "id": this.userbody.id, "nom": this.Info.value.nom, "email": this.Info.value.email, "motDePasse": this.Info.value.motDePasse, "telephone": this.Info.value.telephone };
    console.log(userInfo);
    this.authService.updateCustommer(userInfo).subscribe((data) => {
      this.customer = data;
      let initials = userInfo?.email[0]+userInfo?.email[1];
      console.log(initials)
      localStorage.removeItem("initial");
      localStorage.removeItem("customer");
      localStorage.setItem("initial",initials);
      localStorage.setItem("customer", JSON.stringify(this.customer));
      this.router.navigate(['tab/home'])
    })
  }
  toPage() {
    this.router.navigate(['/addresses'])
  }
  openPopover(e: Event){
    this.popover.event = e;
    this.isOpen = true;
  }
}
