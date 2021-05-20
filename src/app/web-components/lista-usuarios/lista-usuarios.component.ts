import { Component, OnInit } from '@angular/core';

import { UsuarioServiceService } from '../../services/usuario-service.service'

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  tittle = "Informacion a mostrar"
  data_two_way_headers = ["Nombre(s)", "Apellido(s)", "Correo Electronico"]
  data_two_way_content = []

  constructor(private userService: UsuarioServiceService) { }

  funcionDeTS(): void {
    console.log("the function 'nuevaFuncion' was executed.")
  }
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe(res=>{
      this.data_two_way_content = res.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      }).sort()
    }
    );
  }

}
