import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../../services/usuario-service.service';
import { Router } from '@angular/router'


declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ussername = ""
  password = ""
  emailValido = false

  //List users
  usuarios = []

  constructor(private usuarioServiceService: UsuarioServiceService,
    private router: Router) { 
    }

  verificarEmail(): void {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.emailValido = Boolean(re.test(this.ussername) && this.password);
    console.log(this.emailValido)
  }

  login(): any{
    if(this.valid_users()){
      this.router.navigate(['./vista-lista-plantas']);
    } else {
      this.showNotification('danger', "Los datos introducidos no son correctos.")
    }
  }

  valid_users(): boolean {
    for (var _i = 0; _i < this.usuarios.length; _i++) {
      let user = this.usuarios[_i]
      if (user.email == this.ussername && user.password == this.password ){
        console.log("Bienvenido " + user.name)
        this.showNotification('success', "Bienvenido "+user.name)
        return true;
      }
    }
      return false;
  }

  ngOnInit(): void {
    this.usuarioServiceService.getUsers().subscribe(res=>{
      this.usuarios = res.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      })
    }
    );
  }

  //Alert
  showNotification(msg_type, message){
    const type = ['','info','success','warning','danger'];

    $.notify({
        icon: "pe-7s-attention",
        message: message
        
    },{
        type: msg_type,
        timer: 1000,
        placement: {
            from: 'top',
            align: 'right'
        }
    });
  }

}


