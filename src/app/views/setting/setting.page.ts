import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  
  genus:string;
  name:string;
  family:string;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  toPage(){
   this.router.navigate(['/addresses']);
  }

}
