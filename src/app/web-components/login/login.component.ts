import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators }  from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  hide = true;
  //private subscripcion: Subscription;
  private isValidEmail= /\S+@\S+\.\S+/;
  loginForm = this.fb.group({
      // email: new FormControl(''),
      // password: new FormControl(''),
     email: ['', [Validators.required, Validators.pattern(this.isValidEmail)]],
     password: ['', [Validators.required, Validators.minLength(5)]],

   });

  authSvc: any;
  
  constructor(
    //private authSvc:AuthSevice,
    private fb: FormBuilder,
    //private router: Router
  ){}
  ngOnInit(): void {}

  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
    //this.subscripcion.unsubscribe();
  }

  onlogin(): void{
    //console.log('Form->', this.loginForm.value);
  //    if(this.loginForm.invalid){
  //      return;
  //  }

    //const formValue = this.loginForm.value;
    // this.subscripcion.add(
    //   this.authSvc.login(formValue).subscripcion((res) =>{
    //     if(res){
    //       this.router.navigate([""]);
    //     }
    //   })
    // );
  //}

  // getErrorMessage(field: string): string {
  //     let message;
  //     if(this.loginForm.get(field).errors.required){
  //         message='You must enter a value';
  //     }else if(this.loginForm.get(field).hasError('patterm') ){
  //         message='No a valid emaiñ.';
  //     }else if(this.loginForm.get(field).hasError("minlength") ){
  //         const minlength= this.loginForm.get("field").errors?.minlength
  //         .requiredLength;
  //         message='This field must be longer than ${minlength} characters';
  //     }
  //     return message;
  // }

  // isValidField(field: string): boolean {
  //     return (
  //       (this.loginForm.get("field").touched || this.loginForm.get("field").dirty)
  //       && !this.loginForm.get("field").valid
  //     );
  // }
  }
}
