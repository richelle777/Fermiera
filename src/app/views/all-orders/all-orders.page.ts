import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/public2/api.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.page.html',
  styleUrls: ['./all-orders.page.scss'],
})
export class AllOrdersPage implements OnInit {
  customer:any;
  history: any;
  order: any;
  filteredList: any = [];

  constructor(private router: Router,
              private apiService: ApiService,
              private http: HttpClient ) { 
                const retrieve = localStorage.getItem("customer");
                this.customer = JSON.parse(retrieve);
              }

   ionViewDidEnter(){
  //   const retrouve = localStorage.getItem("historique");
  //   console.log('historique',retrouve);
    
  //   this.history = JSON.parse(retrouve);
  //   this.apiService.getCommandHistory((this.history.id_user).then((data) => {
  //   this.order = data;
  //   this.filteredList =  this.order;
  //     console.log(this.order);
  //   }),
  //  )

  console.log('user',this.customer.body.id);
  

  this.apiService.getCommandHistory("CU0117").then((element)=>{
    console.log('history',element);
    const retrouve = element
    
  })


} 

  goToPage(){
    const command = this.filteredList.find( order => this.order.id == this.history.id_user);
    localStorage.setItem('historique',JSON.stringify(command));
    this.router.navigate(['/follow-order']);
  }

  ngOnInit() {
  }

  retrouver(){


  }

}
