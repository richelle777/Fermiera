import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { HttpService } from 'src/app/services/public1/http.service';
import { GestionPagesService } from 'src/app/services/public2/gestion-pages.service';
import { ChangeDetectorRef, OnDestroy, PipeTransform } from '@angular/core';
import { LanguageService } from './../../services/language.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {

  region: string;
  residence:string;
  longitude:string;
  latitude:string;
  country:string;
  city:string;

  user:any;

  onTranslationChange: Subscription | undefined;
  onLangChange: Subscription | undefined;
  onDefaultLangChange: Subscription | undefined;



  constructor(private modalCtrl: ModalController, private httpclient:HttpService, private gest_modal:GestionPagesService, private toastController: ToastController, private http2:HttpService) {
    let a = localStorage.getItem("customer");
    this.user = JSON.parse(a);
  }


  async presentToast(position: 'top') {
    const toast = await this.toastController.create({
      message: 'Please fill in all the fields',
      duration: 2000,
      position: position
    });

    await toast.present();
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
   
    



    if (this.region!=undefined && this.residence !=undefined && this.longitude !=undefined && this.latitude !=undefined && this.city !=undefined && this.country !=undefined){
    let data = {
      "residence":this.residence,
      "ville":this.city,
      "country":this.country,
      "region":this.region,
      "longitude":this.longitude,
      "latitude":this.latitude,
      "added_by":this.user.body.id
    }

    console.log('form', data);
    
    
    this.httpclient.saveAddress(JSON.stringify(data))
    this.gest_modal.SetToModal(-1);
    
    return this.modalCtrl.dismiss(this.region, 'confirm');
  }
  else{
    this.presentToast('top')
  }

    // quand la page payement sera operationnelle on le redirigera directement sur cette derniere
  }

  ngOnInit() {
  }

}
