import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../services/public1/http.service';
import { Router } from '@angular/router';
import { Console } from 'console';
import { Article } from 'src/app/class/article';
import { Panier } from 'src/app/class/panier';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {
  commandeArticle:any
  constructor(private httpSevice:HttpService , private router:Router) {
    this.httpSevice.listArticleCommande().then((data) => {
      this.commandeArticle = data
      console.log(this.commandeArticle)
    })
   }
  numberProduit!:number;
  Encours:any;
  article:any;
  ArticleEncours:any;
  _e:any;
  loaded=false;
  Tab: Article[]=[];
  panier: Panier[]=[];
  _!:number;
  ngOnInit() {
    this.numberProduit=0;
    this._=0;
  }
  ionViewDidEnter(){
    this.httpSevice.listArticleCommande().then((data) => {
      this.commandeArticle = data
      console.log(this.commandeArticle)
      this.Encours=this.commandeArticle.filter((item) => item.id.idCommande == "C00081");
      console.log(this.Encours);
    })

    this.httpSevice.listArticles().then((data:Article[])=>{
      this.article=data;
      console.log(this.article)
      
    for (let article of this.article){
      for (let articom of this.Encours){
        if (article.id == articom.id.idArticle){
          this.panier..push(article);
          this.panier.push(articom.quantite)
          console.log("le panier",this.panier);
         // this.panier[this._].quantite=articom.quantite;
        }
      }
      this._=this._+1;
    }
    console.log("le tab",this._);
    })
    setTimeout(() => {
      this.loaded = true;
    } , 1000)
  }
  add(article:any){
   let a=article.quantite+1;
   this.httpSevice.updateArticleFromCommande(a,article.id)
  }
remove(){
  if(this.numberProduit<=0){
   this.numberProduit=0;
  }
  else{
    this.numberProduit=this.numberProduit-1;
  }
    
}
}
