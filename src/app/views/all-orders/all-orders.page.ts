import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.page.html',
  styleUrls: ['./all-orders.page.scss'],
})
export class AllOrdersPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
