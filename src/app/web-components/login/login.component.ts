import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loginForm= new FormGroup({
  //     email: new FormControl(""),
  //     password: new FormControl(""),
  // });
  // authSvc: any;
  // constructor() { }

  ngOnInit(): void {}

  // async onLogin(){

  //   //console.log("Form->", this.loginForm.value);
  //   const{emial, password} = this.loginForm.value;
  //   try {
  //     this.authSvc.login(emial, password);
      
  //   } catch (error) {
  //     console.log(error);
      
  //   }

  //  }
}
