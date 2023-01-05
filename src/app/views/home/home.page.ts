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
  constructor(private httpSevice:HttpService) { 
    this.httpSevice.listArticles().then((data) => {
      this.articles = data
      console.log(this.articles);
      
    })
    this.httpSevice.listCategories().then((data) => {
      this.categories = data
      console.log(this.categories);
      
    })
  }

  ngOnInit() {
  }

}
