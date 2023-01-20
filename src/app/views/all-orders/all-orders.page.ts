import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/public2/api.service';
import { GestionPagesService } from 'src/app/services/public2/gestion-pages.service';
import { HttpClient } from '@angular/common/http';
import { runInThisContext } from 'vm';
import { ChangeDetectorRef, OnDestroy, PipeTransform } from '@angular/core';
import { LanguageService } from './../../services/language.service';
import { Subscription } from 'rxjs';
import * as i0 from '@angular/core';



@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.page.html',
  styleUrls: ['./all-orders.page.scss'],
})
export class AllOrdersPage implements OnInit {
  customer:any;
  history: any;
  order: any;
  filteredList: any = [];
  iduser: any;
  code:string;
  commande = new Array<any>;
  articles:any;
  statut:any;
  statutlivraison:any;
  comeToHistory:any;
  trouve;
  historiquecommande = [];
  user:any;
  total = 0;
  force:any;
  forcer = new Array<any>;
  onTranslationChange: Subscription | undefined;
  onLangChange: Subscription | undefined;
  onDefaultLangChange: Subscription | undefined;

  constructor(private router: Router,
              private apiService: ApiService,
              private gestionPage:GestionPagesService,
              private lng:LanguageService,
             ) { 
              const retrouver = localStorage.getItem("customer");
              this.customer = JSON.parse(retrouver);
              this.iduser = this.customer.body.id;
              console.log(this.iduser);             
              }


  goToPage(data: any){
    this.gestionPage.set_OfHistory(1);
    const retrouver = localStorage.getItem("id");
    this.iduser = JSON.parse(retrouver);
    localStorage.setItem("commandeHistory", JSON.stringify(data));
    
    this.router.navigate(['/follow-order']);
  }

  ionViewDidEnter(){
   this.historique()
  }
  
  
  historique(){

     this.apiService.getCommandHistory(this.iduser).then((ele)=>{
      console.log("history",ele);
      let ke = Object.keys(ele)
      console.log("commande",ke);

      for (let index = 0; index < ke.length; index++) {
        let topush = ke[index].split(",");
        this.commande.push(ke[index].split(","));
        console.log("essai",ele[ke[0]]);
        let articles = [];
        let total = 0;
        for (let i = 0; i < ke[index].length; i++) {
          console.log("flemme",ele[ke[index]][i]);
          
          let quantite = ele[ke[index]][i]?.articleDto.prixU * ele[ke[index]][i]?.quantity;
          let article = ele[ke[index]][i]?.articleDto.nom;
          if (article == undefined ){
              break
          }
          total = total + quantite;
          let detail = {
            "nom": article,
            "quantite":quantite
          }

          articles.push(detail);

        }
        console.log("infos articles",articles);
        let idcommmande = topush[0]
        let livre = topush[2]
        let statutCommande = topush[3]

        let verite = {
          "total":total,
          "articles":articles,
          "id": idcommmande.substr(15),
          "livre":livre.substr(6),
          "statutCommande":statutCommande.substr(16)

        }

        this.historiquecommande.push(verite);
        console.log('historique serieux',this.historiquecommande);
 
      }

      console.log('push',this.commande);
  
     })
    

    }
  

  

  ngOnInit() {
    
  }

}
