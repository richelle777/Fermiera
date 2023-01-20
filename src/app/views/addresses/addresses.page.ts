import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HttpService } from 'src/app/services/public1/http.service';
import { ApiService } from 'src/app/services/public2/api.service';
import { GestionPagesService } from 'src/app/services/public2/gestion-pages.service';
import { AddAddressPage } from '../add-address/add-address.page';
import { ChangeDetectorRef, OnDestroy, PipeTransform } from '@angular/core';
import { LanguageService } from './../../services/language.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.page.html',
  styleUrls: ['./addresses.page.scss'],
})
export class AddressesPage implements OnInit {
  supp = 0;
  commandes;
  open:number
  local;
  user:any;
  onTranslationChange: Subscription | undefined;
  onLangChange: Subscription | undefined;
  onDefaultLangChange: Subscription | undefined;

  constructor(private modalCtrl: ModalController, private httpservice:ApiService, private router:Router, private gestModal:GestionPagesService, private http2:HttpService) {
   
    
    setInterval(()=>{
      this.open = this.gestModal.getModal()

      if (this.open == -1 || this.supp == 1){
        this.httpservice.listLocalisations(this.user.body.id).then((data)=>{
          console.log(data);
          this.commandes = data;
      
          this.local = this.commandes.filter(function(localisation) {
            return localisation.deleted == false;})
          
        });
      }
      
    },1000);
   }
  message:string
  ngOnInit() {
  }

  async openModal() {
    this.gestModal.SetToModal(1);
    const modal = await this.modalCtrl.create({
      component: AddAddressPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
      console.log('message:',this.message);  
    }
  }

  async deletelocalisation(idlocalisation){
   this.supp = 1;
    this.httpservice.hideLocalisation(idlocalisation).then((data)=>{
      this.router.navigate(['addresses']);
    })
  }

  ionViewDidEnter(){
    let a = localStorage.getItem("customer");
    this.user = JSON.parse(a)
    console.log('user',this.user);
    this.supp = 0;
  
  
  this.httpservice.listLocalisations(this.user.body.id).then((data)=>{
    console.log("data",data);
    this.commandes = data;


    this.local = this.commandes.filter(function(localisation) {
      console.log('localisation',localisation);
      
      return localisation.deleted == 0;})
    
  })
  }



      




}
