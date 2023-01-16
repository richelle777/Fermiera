import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  constructor() { }
  numberProduit!:number;
  ngOnInit() {
    this.numberProduit=0;
  }

  add(i:number){
    this.numberProduit=this.numberProduit+1;
  }
}
