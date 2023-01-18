import { HttpService } from './../../services/public1/http.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // articles : any;
  categories : any;
  customer : any;
  initials : String;
  resultsOfFilter  = [];

  @ViewChild('popover') popover;
  isOpen = false;

  constructor(private httpSevice:HttpService , private router:Router) { 
    const retrieve = localStorage.getItem("customer");
    this.customer = JSON.parse(retrieve);
    this.initials = this.customer.body.email[0]+this.customer.body.email[1];
    console.log(this.initials);
    
    // this.httpSevice.listArticles().then((data) => {
    //   this.articles = data
    //  // console.log(this.articles);
    // })
  }

  ngOnInit() {
  }

  openPopover(e: Event){
    this.popover.event = e;
    this.isOpen = true;
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
