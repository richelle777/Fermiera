import { HttpService } from './../../services/public1/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  articles : any;
  categories : any;
  resultsOfFilter  = [];
  constructor(private httpSevice:HttpService) { 
    this.httpSevice.listArticles().then((data) => {
      this.articles = data
      console.log(this.articles);
      
    })
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.httpSevice.listCategories().then((data) => {
      this.categories = data
      this.resultsOfFilter = this.categories;
      console.log(this.categories);
    })
  }

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.resultsOfFilter = this.categories.filter(d => d.nom.toLowerCase().indexOf(query) > -1);
    console.log(this.resultsOfFilter);
  }
}
