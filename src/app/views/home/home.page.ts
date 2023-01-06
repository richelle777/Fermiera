import { HttpService } from './../../services/public1/http.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  articles : any;
  categories : any;
  resultsOfFilter  = [];
  constructor(private httpSevice:HttpService , private router:Router) { 
    this.httpSevice.listArticles().then((data) => {
      this.articles = data
     // console.log(this.articles);
    })
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.httpSevice.listCategories().then((data) => {
      this.categories = data
      this.resultsOfFilter = this.categories;
      //console.log(this.categories);
    })
  }

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.resultsOfFilter = this.categories.filter(d => d.nom.toLowerCase().indexOf(query) > -1);
    //console.log(this.resultsOfFilter);
  }

  toPage(obj) {
    localStorage.setItem("categorie", JSON.stringify(obj));
    //console.log(obj);
    this.router.navigate(['liste-articles'])
    // this.router.navigate(['tab/liste-articles/',obj.nom])
  }
}
