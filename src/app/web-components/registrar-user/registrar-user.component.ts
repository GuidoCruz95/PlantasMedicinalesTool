import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../../services/usuario-service.service'

import { Router } from '@angular/router'

declare var $:any;
@Component({
  selector: 'app-registrar-user',
  templateUrl: './registrar-user.component.html',
  styleUrls: ['./registrar-user.component.css']
})
export class RegistrarUserComponent implements OnInit {

  user = {
    "email": "",
    "lastname": "",
    "name": "",
    "password": "",
    "phone": ""
  }

  emailValido = false

  formularioValido = false

  user_exists = false

  userList = []

  constructor(
    private router: Router,
    private usuarioServiceService: UsuarioServiceService
  ) { }

  registry() {
    console.log("registry started")
    this.verify()
    if(this.user_exists){
      this.showNotification("Ya existe un usuario con el mismo correo electronico.", 'warning');
    } else {
      this.usuarioServiceService.createUsers(this.user)
      this.showNotification("Registrando informacion del usuario.", 'info');
      this.router.navigate(['./lista-usuarios']);
    }
  }

  showNotification(message, type){
    $.notify({
        icon: "pe-7s-gift",
        message: message
    },{
        type: type,
        timer: 1000,
        placement: {
            from: 'top',
            align: 'right'
        }
    });
}

  verify(){
    for (var _i = 0; _i < this.userList.length; _i++) {
      let user = this.userList[_i]
      if(user.email == this.user.email){
        this.user_exists = true
        console.log("there is the email on the db")
        return 
      } else {
        this.user_exists = false
      }
    }
  }

  cancelRegistry() {
    console.log("cancel registry redirecting to list-planta")
    this.router.navigate(['./vista-lista-plantas']);
  }

  verificarEmail(): void {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.emailValido = Boolean(re.test(this.user.email));
  }

  validarFormulario(){
    this.verificarEmail()
    if (
      this.emailValido 
      && (this.user.email.length <= 50) &&
      (this.user.name.length >=2 && this.user.name.length <= 20) &&
      (this.user.lastname.length >=2 && this.user.lastname.length <= 20) &&
      (this.user.phone.toString().length ==0 || this.user.phone.toString().length ==7 || this.user.phone.toString().length == 8)
      ){
      this.formularioValido = true
    } else {
      this.formularioValido = false
    }
    console.log(this.formularioValido)
  }

  ngOnInit(): void {
    this.usuarioServiceService.getUsers().subscribe(res=>{
      this.userList = res.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      }).sort()
    }
    )
  }

}
