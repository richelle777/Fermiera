import { ConnexionForm } from './../../class/connexion-form';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup , FormBuilder , Validators , FormControl} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validationFormUser: FormGroup;
  connexionForm:ConnexionForm;
  customer:any;
  emailReceive = "";
  customerReceive = "";
  constructor( private router:Router , public formbuilder: FormBuilder , private authService:AuthService) { 
    this.customer = localStorage.getItem("customer");
    this.emailReceive = this.customer.email;
  }
  
  ngOnInit() {
    this.validationFormUser = this.formbuilder.group({
      email: new FormControl('' , Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('' , Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    })
  }
  goToRegister(){
    this.router.navigate(['register']);
  }
  goToHome(){
    this.router.navigate(['home']);
  }
  validationUserMessage ={
    email:[
      {type:"required", message:"Please enter your Email"},
      {type:"pattern", message:"The Email entered is Incorrect. Try again"}
    ],
    password:[
      {type:"required", message:"Please enter your password!"},
      {type:"minlength", message:"The Password must be at least 5 characters or more"}
    ]
  }

  loginUser(connexionForm:any){
    console.log(connexionForm);
    
    this.authService.login(connexionForm).subscribe((data) => {
      this.customer = data;
      localStorage.setItem("customer", JSON.stringify(this.customer));
      this.router.navigate(['tab/home'])
    })
  }

  // loginUser(value){
  //   console.log("Am logged in");
  //   console.log(value);
  //   // try{
  //   //    this.authservice.loginFireauth(value).then( resp =>{
  //   //      console.log(resp);
  //   //   //  this.router.navigate(['tabs'])
   
  //   //    if(resp.user){
  
  //   //      this.authservice.setUser({
  //   //        username : resp.user.displayName,
  //   //        uid: resp.user.uid
  //   //      })
  
  //   //     const userProfile = this.firestore.collection('profile').doc(resp.user.uid);
  
  //   //      userProfile.get().subscribe( result=>{
  
  //   //       if(result.exists){
  //   //         this.nav.navigateForward(['tabs']);
  //   //       }else{
  
  //   //         this.firestore.doc(`profile/${this.authservice.getUID()}`).set({
  //   //           name: resp.user.displayName,
  //   //           email: resp.user.email
  //   //         });
  
  //   //          this.nav.navigateForward(['uploadimage']);
  //   //       }
  //   //      })
  //   //    }
    
         
  //   //    })
  //   // }catch(err){
  //   //   console.log(err);
  //   // }
  // }
  
}
