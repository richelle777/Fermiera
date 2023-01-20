import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../services/public1/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details-fruits',
  templateUrl: './details-fruits.page.html',
  styleUrls: ['./details-fruits.page.scss'],
})
export class DetailsFruitsPage implements OnInit {
  article:any
  constructor(private httpSevice:HttpService , private router:Router) { }
  numberProd:number;
  fruit:any;
  user:any;
  userbody:any;
  listcommande:any;
  recup:any;
  forcer=new Array<any>;
  commandeEncours:any;
  ngOnInit() {
    this.numberProd=1;
    const retrieve=localStorage.getItem('detailF');
    // @ts-ignore
    this.article=JSON.parse(retrieve);
    console.log(this.article);
    const retrieve2 = localStorage.getItem('customer');
    // @ts-ignore
    this.user = JSON.parse(retrieve2);
    this.userbody = this.user.body;
  }
  ionViewDidEnter(){

    this.httpSevice.commandesid().then((data)=>{
      this.listcommande=data;
      console.log(this.listcommande);
      for(let commande of this.listcommande){
        if(this.userbody.id== commande.clientDto.id){
          if(commande.statutCommande =="En cours"){
            console.log("LE Userbody",commande.clientDto.id);
          this.recup=commande.id;
          console.log("commandeEncours",this.recup);
          }
        }
      }
    });


  }
  add(){
    if(this.article.quantite> this.numberProd+1){
      this.numberProd=this.numberProd+1;
    }
    else{
      this.numberProd=this.article.quantite
    }
      
  }
  remove(){
    if(this.numberProd<=0){
     this.numberProd=1;
    }
    else{
      this.numberProd=this.numberProd-1;
    }
      
  }
  addCommande()
  {
    let data = {
      "id":{
        "idArticle":this.article.id,
        "idCommande":this.recup,
      },
      "quantite":this.numberProd
    }
    console.log('form', data);
    this.httpSevice.saveArticleCommande(JSON.stringify(data))
    this.router.navigate(['/panier'])
  }

}
