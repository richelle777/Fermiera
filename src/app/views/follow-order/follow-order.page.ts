import { Component, OnInit } from '@angular/core';
import { Panier } from 'src/app/class/panier';
import { ApiService } from 'src/app/services/public2/api.service';
import { GestionPagesService } from 'src/app/services/public2/gestion-pages.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";

@Component({
  selector: 'app-follow-order',
  templateUrl: './follow-order.page.html',
  styleUrls: ['./follow-order.page.scss'],
})
export class FollowOrderPage implements OnInit {
  code:string;
  commande:any;
  articles:any;
  statut:any;
  statutlivraison:any;
  comeToHistory:number;
  trouve;
  total = 0;
  force:any;
  forcer = new Array<any>;

 
  constructor(private httpclient:ApiService, 
              private gestionPage:GestionPagesService,
              private router:Router) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.comeToHistory = this.gestionPage.get_OfHistory()
    if (this.comeToHistory == 1){
      this.trouve = false;
      this.commande = localStorage.getItem('commandeHistory');
      this.statut = this.commande.statutCommande.replace(/é|è|ê/g,"e");
      this.statutlivraison = this.commande.livraisonDto.statutLivraison.replace(/é|è|ê/g,"e");
      console.log('statut',this.statut);
    
      this.httpclient.getArticlesOfCommande(this.commande.id).then((el)=>{
      console.log('article',el);
      this.articles = el;
     
      let suivis = new Array<any>;
      for (let index = 0; index < this.articles.length; index++) {
        let forceee = {

          "article":this.articles[index].articleDto,
          "quantite":this.articles[index].articleDto.prixU * this.articles[index].quantity
        }
        this.total = this.total + this.articles[index].articleDto.prixU * this.articles[index].quantity
  
        suivis.push(forceee)
        console.log("suivi",suivis);
        
        
      }

      this.forcer = suivis;
      console.log("suivis",this.forcer);
      
      
    },).catch((erro)=>{
      console.log('error article',erro);
      
    })
      
    }
  }
  
  rechercher(){
    this.comeToHistory = 0;
   this.httpclient.followCommande(this.code.toUpperCase()).then((element)=>{
    console.log('commande infos',element);
    this.commande = element;
    this.statut = this.commande.statutCommande.replace(/é|è|ê/g,"e");
    this.statutlivraison = this.commande.livraisonDto.statutLivraison.replace(/é|è|ê/g,"e")
    console.log('statut',this.statut);
    
    this.httpclient.getArticlesOfCommande(this.commande.id).then((el)=>{
      console.log('article',el);
      this.articles = el;
     
      let suivis = new Array<any>;
      for (let index = 0; index < this.articles.length; index++) {
        let forceee = {

          "article":this.articles[index].articleDto,
          "quantite":this.articles[index].articleDto.prixU * this.articles[index].quantity
        }
        this.total = this.total + this.articles[index].articleDto.prixU * this.articles[index].quantity
  
        suivis.push(forceee)
        console.log("suivi",suivis);
        
        
      }

      this.forcer = suivis;
      console.log("suivis",this.forcer);
      
      
    },).catch((erro)=>{
      console.log('error article',erro);
      
    }),
    this.trouve = true;
   }).catch((err)=>{
    console.log('error',err);
    this.trouve = false;
    
   })

   

  }
}
