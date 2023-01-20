import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../services/public1/http.service';
import { Router } from '@angular/router';
import { Console } from 'console';
import { Article } from 'src/app/class/article';
import { Panier } from 'src/app/class/panier';
import { interval } from 'rxjs';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {
  commandeArticle:any;
  present=false;
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
  total:number;
  commandeEncours:any;
  _!:number;
  user:any;
  userbody:any;
  listcommande:any;
  recup:any;
  forcer=new Array<any>;
  ngOnInit() {
    this.numberProduit=0;
    this._=0;
    this.total=0;
  }
  ionViewDidEnter(){
    const retrieve = localStorage.getItem('customer');
    // @ts-ignore
    this.user = JSON.parse(retrieve);
    this.userbody = this.user.body;

    this.httpSevice.commandesid().then((data)=>{
      this.listcommande=data;
      console.log(this.listcommande);
      for(let commande of this.listcommande){
        if(this.userbody.id== commande.clientDto.id){
          console.log(this.userbody,commande.clientDto.id);
          this.commandeEncours=this.listcommande.filter((item)=> item.statutCommande == "En cours");
          this.recup=this.commandeEncours[0].id;
          console.log("commandeEncours",this.recup);
        }
      }
    });

    this.httpSevice.listArticleCommande().then((data) => {
      this.commandeArticle = data
      console.log(this.commandeArticle)
      this.Encours=this.commandeArticle.filter((item) => item.id.idCommande == this.recup);
      console.log("heoooo",this.Encours);
    })

    this.httpSevice.listArticles().then((data:Article[])=>{
      this.article=data;
      let suivis = new Array<any>;
      for (let article of this.article){
        for (let articom of this.Encours){
          if (article.id == articom.id.idArticle){
            let forceee = {
              "article":article,
              "quantite":articom.quantite,
              "quantiteModif":articom.quantite,
              //"prixquantite":this.article[index].articleDto.prixU * this.Encours[indexE].quantity,
            }
            this.total = this.total + forceee.article.prixU * forceee.quantiteModif;
            console.log("total",this.total)
            console.log("forceee",forceee)
            suivis.push(forceee)
            console.log("suivi",suivis);  
          } 
        }
      }
      this.forcer=suivis;
      if(this.Encours.length==0){
        // this.loaded=false;
        // this.present=true;
        console.log("vide")
      }
      
    })
    setTimeout(() => {
      this.loaded = true;
     } , 1000)
    
  }
  add(article:any){
    if(article.article.quantite > article.quantiteModif+1){
      for(let i=0;i< this.forcer.length;i++){
        if(this.forcer[i].article.id ==article.article.id){
          this.forcer[i].quantiteModif=article.quantiteModif+1;
          this.total = this.total+this.forcer[i].article.prixU;
          console.log("total+",this.total);
          console.log("modification",this.forcer);
        }
    }
    }
    else{
      for(let i=0;i< this.forcer.length;i++){
        if(this.forcer[i].article.id ==article.article.id){
          this.forcer[i].quantiteModif= article.article.quantite;
          // this.total =this.forcer[i].article.prixU * this.forcer[i].quantiteModif;
          console.log("total+",this.total);
          console.log("modification",this.forcer);
        }
    }
    }
   //this.httpSevice.updateArticleFromCommande(a,article.article.id)
  }
remove(article:any){
  for(let i=0;i< this.forcer.length;i++){
    if(this.forcer[i].article.id ==article.article.id){
      if ((article.quantiteModif-1) <=0 ){
       this.forcer[i].quantiteModif=1;
       this.total= this.total;
      }
      else{
        this.forcer[i].quantiteModif=article.quantiteModif-1;
        if((this.total-this.forcer[i].article.prixU * this.forcer[i].quantiteModif)<0){
          this.total= this.total;
        }
        else{
          this.total = this.total-this.forcer[i].article.prixU;
          console.log("modification",this.total);
        }
       
      }
     
    }
}
}
delete(article){
  this.httpSevice.deleteArticleFromCommande(article.article.id);
 
 // this.router.navigate(['/tab/panier'])
}
}
