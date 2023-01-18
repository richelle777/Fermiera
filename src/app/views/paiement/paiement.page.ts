import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.page.html',
  styleUrls: ['./paiement.page.scss'],
})
export class PaiementPage implements OnInit {

  constructor(public alertController:AlertController) { }

  ngOnInit() {
  }
  async openDialog(){
    const alert=await this.alertController.create({
      header:"",
      subHeader:"",
      message: "Votre requette a été prise en compte",
    });
    await alert.present();
  }

}
