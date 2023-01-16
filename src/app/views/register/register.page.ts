import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup , FormBuilder , Validators , FormControl} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  validationFormUser: FormGroup;
  registerForm: any;
  customer : any;
  constructor(private router:Router , public formbuilder: FormBuilder , private authService:AuthService) { }

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
        // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
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
      {type:"required", message:"Please enter your password!"}
    ],
    telephone:[
      {type:"required", message:"Please enter your password!"}
    ]
  }

  goToLogin(){
    this.router.navigate(['login']);
  }

  registerUser(registerForm){
    console.log(registerForm);
    registerForm.id = "abbbbnn";
    this.authService.register(registerForm).subscribe((data) => {
      this.customer = data;
      console.log(this.customer);
      
      localStorage.setItem("customer", JSON.stringify(this.customer));
      this.router.navigate(['login'])
    })
  }
}
