import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({

    email: new FormControl('villca.fuentes23@gmail.com'),
    password: new FormControl('3coronas')
  })
  ngOnInit(): void {}

  onlogin(){
    console.log('Form->', this.loginForm.value);
  }


}
