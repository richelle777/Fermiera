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
  fruit:any
  ngOnInit() {
    this.numberProd=0;
    const retrieve=localStorage.getItem('detailF');
    // @ts-ignore
    this.article=JSON.parse(retrieve);
    console.log(this.article);
  }
  add(){
      this.numberProd=this.numberProd+1;
  }
  remove(){
    if(this.numberProd<=0){
     this.numberProd=0;
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
        "idCommande":"C00081",
      },
      "quantite":this.numberProd
    }
    console.log('form', data);
    this.httpSevice.saveArticleCommande(JSON.stringify(data))
    this.router.navigate(['/panier'])
  }

}
