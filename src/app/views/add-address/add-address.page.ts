import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpService } from 'src/app/services/public1/http.service';
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


  constructor(private modalCtrl: ModalController, private httpclient:HttpService) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    let data = {
      "residence":this.residence,
      "ville":this.city,
      "country":this.country,
      "region":this.region,
      "longitude":this.longitude,
      "latitude":this.latitude
    }

    console.log('form', data);
    

    this.httpclient.saveAddress(JSON.stringify(data))
    
    return this.modalCtrl.dismiss(this.region, 'confirm');
  }

  ngOnInit() {
  }

}
