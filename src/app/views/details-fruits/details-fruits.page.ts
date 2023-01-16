import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-fruits',
  templateUrl: './details-fruits.page.html',
  styleUrls: ['./details-fruits.page.scss'],
})
export class DetailsFruitsPage implements OnInit {

  constructor() { }
  numberProd:number;
  fruit:any
  ngOnInit() {
    this.numberProd=0;
    const retrieve=localStorage.getItem('detailF');
    // @ts-ignore
    this.fruit=JSON.parse(retrieve);
    console.log(this.fruit);
  }
  add(){
      this.numberProd=this.numberProd+1;
  }
  remove(){
    if(this.numberProd<=0){
     this.numberProd=0;
    }
    else{
      this.numberProd=this.numberProd-1;
    }
      
  }

}
