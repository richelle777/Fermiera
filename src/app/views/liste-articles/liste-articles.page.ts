import { HttpService } from './../../services/public1/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.page.html',
  styleUrls: ['./liste-articles.page.scss'],
})
export class ListeArticlesPage implements OnInit {
  categorieSelected : any;
  loaded = false;
  fruitsOfCat : any;
  sizeOfArticles : number;
  resultsOfFilter  = [];
  test = new Set();

  constructor(private route: ActivatedRoute , private httpService:HttpService,private router:Router) { 
    const retrieve = localStorage.getItem("categorie");
    this.categorieSelected = JSON.parse(retrieve);
    //console.log(this.categorieSelected);
    
    this.httpService.listFruitsByCat(this.categorieSelected.nom).then((data) => {
      this.fruitsOfCat = data;
      this.resultsOfFilter =  this.fruitsOfCat;
      this.sizeOfArticles = this.resultsOfFilter.length;
      console.log(this.fruitsOfCat);
    })

    // setTimeout(() => {
    //   console.log(this.resultsOfFilter.length);
    //   this.loaded = true;
    // } , 1000)
  }
  ionViewDidEnter(){
    const retrieve = localStorage.getItem("categorie");
    this.categorieSelected = JSON.parse(retrieve);
    this.httpService.listFruitsByCat(this.categorieSelected.nom).then((data) => {
      this.fruitsOfCat = data;
      this.resultsOfFilter =  this.fruitsOfCat;
      this.sizeOfArticles = this.resultsOfFilter.length;
      console.log(this.fruitsOfCat);
    })
    setTimeout(() => {
      console.log(this.resultsOfFilter.length);
      this.loaded = true;
    } , 1000)
    // this.categorieSelected = this.route.snapshot.paramMap.get('categorie');
    // console.log(this.categorieSelected); 
  }
  ngOnInit() {
  }
  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.resultsOfFilter = this.fruitsOfCat.filter(d => (d.nom.toLowerCase().indexOf(query) > -1) || (d.prixU == query));
    console.log(this.resultsOfFilter);
  }
  toPage(id:any){
    const fruit=this.resultsOfFilter.find(fruits=> fruits.id ===id);
    localStorage.setItem('detailF',JSON.stringify(fruit));
    this.router.navigate(['/details-fruits']);
  }

}
