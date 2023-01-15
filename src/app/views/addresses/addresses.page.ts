import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpService } from 'src/app/services/public1/http.service';
import { AddAddressPage } from '../add-address/add-address.page';


@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.page.html',
  styleUrls: ['./addresses.page.scss'],
})
export class AddressesPage implements OnInit {
  commandes:any;
 
  local = []
  iduser = "CU0117"
  constructor(private modalCtrl: ModalController, private httpservice:HttpService) {
    // this.httpservice.commandes(this.iduser).then((data) =>{
    //   this.commandes = data })
   }
  message:string
  ngOnInit() {
  }

  async openModal() {
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

  async getLocalisation(){

  }

  ionViewDidEnter(){
    this.httpservice.commandes(this.iduser).then((data) =>{
      console.log(data);
      
      this.commandes = data
      this.local.push(this.commandes[0]['livraisonDto']['localisationDto'])
      for (let index = 1; index < this.commandes.length; index++) {
        if (this.commandes[index]['livraisonDto']['localisationDto']['id'] != this.commandes[index-1]['livraisonDto']['localisationDto']['id'] ){
             this.local.push(this.commandes[index]['livraisonDto']['localisationDto'])
        }

        
      } 

      console.log(this.local);
      

      // this.commandes.forEach(element => {
      //   console.log('element',element['livraisonDto']['localisationDto']);
        
         
      //   this.localisations.add(element['livraisonDto']['localisationDto'])
      // });

      // console.log(this.localisations);
      // this.local = [...this.localisations];

      
  })
  }

      




}
