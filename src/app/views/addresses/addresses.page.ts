import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HttpService } from 'src/app/services/public1/http.service';
import { ApiService } from 'src/app/services/public2/api.service';
import { GestionPagesService } from 'src/app/services/public2/gestion-pages.service';
import { AddAddressPage } from '../add-address/add-address.page';


@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.page.html',
  styleUrls: ['./addresses.page.scss'],
})
export class AddressesPage implements OnInit {
  commandes;
  open:number
  local;
  iduser = "CU0117"
  constructor(private modalCtrl: ModalController, private httpservice:ApiService, private router:Router, private gestModal:GestionPagesService) {
    setInterval(()=>{
      this.open = this.gestModal.getModal()

      if (this.open == -1){
        this.httpservice.listLocalisations(this.iduser).then((data)=>{
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
    this.httpservice.hideLocalisation(idlocalisation).then((data)=>{
      this.router.navigate(['addresses']);
    })
  }

  ionViewDidEnter(){
  //   this.httpservice.commandes(this.iduser).then((data) =>{
  //     console.log(data);
      
  //     this.commandes = data
  //     this.local.push(this.commandes[0]['livraisonDto']['localisationDto'])
  //     for (let index = 1; index < this.commandes.length; index++) {
  //       if (this.commandes[index]['livraisonDto']['localisationDto']['id'] != this.commandes[index-1]['livraisonDto']['localisationDto']['id'] ){
  //            this.local.push(this.commandes[index]['livraisonDto']['localisationDto'])
  //       }

        
  //     } 

  //     console.log(this.local);
      
      
  // })

  this.httpservice.listLocalisations(this.iduser).then((data)=>{
    console.log(data);
    this.commandes = data;

    this.local = this.commandes.filter(function(localisation) {
      return localisation.deleted == false;})
    
  })
  }



      




}
