import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.page.html',
  styleUrls: ['./liste-articles.page.scss'],
})
export class ListeArticlesPage implements OnInit {
  categorieSelected : any;

  constructor(private route: ActivatedRoute) { 
   
  }
  ionViewDidEnter(){
    const retrieve = localStorage.getItem("categorie");
    this.categorieSelected = JSON.parse(retrieve);
    // this.categorieSelected = this.route.snapshot.paramMap.get('categorie');
    // console.log(this.categorieSelected);
    
  }
  ngOnInit() {
  }


}
