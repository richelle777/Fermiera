import { HttpService } from './../../services/public1/http.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/public2/api.service';
import { Optional } from '@angular/core';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { App } from '@capacitor/app';

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
  initalsetting:any;
  resultsOfFilter  = [];

  @ViewChild('popover') popover;
  isOpen = false;

  constructor(private httpSevice:HttpService , private router:Router, private apiservice:ApiService, private platform: Platform,
    @Optional() private routerOutlet?: IonRouterOutlet) { 
      this.platform.backButton.subscribeWithPriority(-1, () => {
        if (!this.routerOutlet.canGoBack()) {
          App.exitApp();
        }
      });
    
    
    const retrieve = localStorage.getItem("customer");
    
    this.customer = JSON.parse(retrieve);
    this.initials = this.customer?.body?.email[0]+this.customer?.body?.email[1];
    this.initalsetting=this.initials;
    localStorage.setItem("initial", this.initalsetting);
    console.log(this.initials);
    
    // this.httpSevice.listArticles().then((data) => {
    //   this.articles = data
    //  // console.log(this.articles);
    // })
  }

  ngOnInit() {
    this.initalsetting=this.initials;
    localStorage.setItem("initial", this.initalsetting);
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

  retrouver(){
    
  }

  toPage(obj) {
    localStorage.setItem("categorie", JSON.stringify(obj));
    //console.log(obj);
    this.router.navigate(['liste-articles'])
    // this.router.navigate(['tab/liste-articles/',obj.nom])
  }

  logOut(){
    localStorage.removeItem("registerInfos");
    localStorage.removeItem("customer"); 
    localStorage.removeItem("initial");
    this.router.navigate(['login']);
  }
}
