import { HttpService } from './../../services/public1/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.page.html',
  styleUrls: ['./liste-articles.page.scss'],
})
export class ListeArticlesPage implements OnInit {
  categorieSelected : any;
  fruitsOfCat : any;
  resultsOfFilter  = [];

  constructor(private route: ActivatedRoute , private httpService:HttpService) { 
    const retrieve = localStorage.getItem("categorie");
    this.categorieSelected = JSON.parse(retrieve);
    //console.log(this.categorieSelected);
    
    this.httpService.listFruitsByCat(this.categorieSelected.nom).then((data) => {
      this.fruitsOfCat = data;
      this.resultsOfFilter =  this.fruitsOfCat;
      console.log(this.fruitsOfCat);
      
   })
  }
  ionViewDidEnter(){
    const retrieve = localStorage.getItem("categorie");
    this.categorieSelected = JSON.parse(retrieve);
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


}
