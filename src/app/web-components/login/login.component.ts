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

  //List users
  usuarios = []

  constructor(private usuarioServiceService: UsuarioServiceService,
    private router: Router) { 
    }

  login(): any{
    if(this.valid_users()){
      this.router.navigate(['./vista-lista-plantas']);
    }
  }

  valid_users(): boolean {
    for (var _i = 0; _i < this.usuarios.length; _i++) {
      let user = this.usuarios[_i]
      if (user.email == this.ussername && user.password == this.password ){
        console.log("Bienvenido "+user.name)
        $.notify({
          icon: "pe-7s-user",
          message: " Bienvenido  Administrador   "  +   user.name
        })
        return true;
      }
      //console.log("Sus datos no son correctos")
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
    showNotification(from, align){
      const type = ['','info','success','warning','danger'];

      var color = Math.floor((Math.random() * 4) + 1);
      $.notify({
          icon: "pe-7s-attention",
          message: "los datos de su correo electrónico o contraseña son incorrectos. "
          
      },{
          type: type[4],
          timer: 1000,
          placement: {
              from: from,
              align: align
          }
      });
    }

}

