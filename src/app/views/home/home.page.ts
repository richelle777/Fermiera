import { LanguageService } from './../../services/language.service';
import { HttpService } from './../../services/public1/http.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/public2/api.service';
import { Optional } from '@angular/core';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { App } from '@capacitor/app';
import { ChangeDetectorRef, OnDestroy, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';
import * as i0 from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // articles : any;
  private _ref;
  onTranslationChange: Subscription | undefined;
  onLangChange: Subscription | undefined;
  onDefaultLangChange: Subscription | undefined;
  categories : any;
  customer : any;
  initials : String;
  resultsOfFilter  = [];

  lngs:any[] = []

  @ViewChild('popover') popover;
  isOpen = false;

  constructor(private lng:LanguageService, _ref:ChangeDetectorRef, private httpSevice:HttpService , private router:Router, private apiservice:ApiService, private platform: Platform,
    @Optional() private routerOutlet?: IonRouterOutlet) { 
      this.platform.backButton.subscribeWithPriority(-1, () => {
        if (!this.routerOutlet.canGoBack()) {
          App.exitApp();
        }
      });
    const retrieve = localStorage.getItem("customer");
    this.customer = JSON.parse(retrieve);
 
    console.log(this.initials);
    
    // this.httpSevice.listArticles().then((data) => {
    //   this.articles = data
    //  // console.log(this.articles);
    // })
    console.log("ooo");
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
    
  }

  // updatevalue(key: string, interpolateParams?: Object , translations?:any):void;
  // transform(query: any, ...args: any[]): any;



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
    this.router.navigate(['login']);
  }
}
