import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup , FormBuilder , Validators , FormControl} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/public1/http.service';
import { ApiService } from 'src/app/services/public2/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  validationFormUser: FormGroup;
  registerForm: any;
  customer : any;
  badEmail = false;

  region: string;
  residence:string;
  longitude:string;
  latitude:string;
  country:string;
  city:string;

  isFirstStep = true;
  isSecondStep = false;


  constructor(private router:Router , public formbuilder: FormBuilder , private authService:AuthService, private httpclient:HttpService, private apiservice:ApiService) {

  }

  ionViewDidEnter(){
  }
  ngOnInit() {
    this.validationFormUser = this.formbuilder.group({
      email: new FormControl('' , Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      motDePasse: new FormControl('' , Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      nom: new FormControl('' , Validators.compose([
        Validators.required,
      ])),
      telephone: new FormControl('' , Validators.compose([
        Validators.required,
        Validators.min(9)
        // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      region: new FormControl('' , Validators.compose([
        Validators.required,
      ])),
      residence: new FormControl('' , Validators.compose([
        Validators.required,
      ])),
      longitude: new FormControl('' , Validators.compose([
        Validators.required,
      ])),
      latitude: new FormControl('' , Validators.compose([
        Validators.required,
      ])),
      country: new FormControl('' , Validators.compose([
        Validators.required,
      ])),
      city: new FormControl('' , Validators.compose([
        Validators.required,
      ])),
      
    })
  }

  validationUserMessage ={
    email:[
      {type:"required", message:"Please enter your Email"},
      {type:"pattern", message:"The Email entered is Incorrect. Try again"}
    ],
    motDePasse:[
      {type:"required", message:"Please enter your password!"},
      {type:"minlength", message:"The Password must be at least 5 characters or more"}
    ],
    nom:[
      {type:"required", message:"Please enter your name!"}
    ],
    telephone:[
      {type:"required", message:"Please enter your phone number!"},
      {type:"min", message:"The phone number must be have 9 numbers"}
    ],
    region:[
      {type:"required", message:"Please enter your region!"}
    ],
    residence:[
      {type:"required", message:"Please enter your residence!"}
    ],
    longitude:[
      {type:"required", message:"Please enter your longitude!"}
    ],
    latitude:[
      {type:"required", message:"Please enter your latitude!"}
    ],
    country:[
      {type:"required", message:"Please enter your country!"}
    ],
    city:[
      {type:"required", message:"Please enter your city!"}
    ]
  }

  goToLogin(){
    this.router.navigate(['login']);
  }

  registerUser(registerForm){
    console.log(registerForm);

    this.authService.register(registerForm).subscribe((data) => {
      this.customer = data;
      console.log(this.customer);
      if(this.customer.body == "this user is already save"){
        this.badEmail = true
      }
      else{
        console.log('custumor',this.customer.body);
        //enregistrer une addresse de livraison
        localStorage.setItem("registerInfos", JSON.stringify(this.customer.body));
        let localform = {
          "residence":registerForm.residence,
          "ville":registerForm.city,
          "country":registerForm.country,
          "region":registerForm.region,
          "longitude":registerForm.longitude,
          "latitude":registerForm.latitude,
          "added_by":this.customer.body.id
        }
    
        console.log('form', localform);
        
        
        this.httpclient.saveAddress(JSON.stringify(localform))

         
        //enregistrer un livraison

        this.apiservice.listLocalisations(this.customer.body.id).then((data)=>{
          console.log("data",data);
          let localisations = data;

          let livraisonForm = {
            "date":null,
            "localisation":localisations[0]
          }

          

        })




        this.router.navigate(['login'])
      }
    })
  }
  goToSecondStep(){
    this.isSecondStep = true;
    this.isFirstStep = false;
  }
  goToFirstStep(){
    this.isSecondStep = false;
    this.isFirstStep = true;
  }
}
