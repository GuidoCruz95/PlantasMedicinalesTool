import { Component, OnInit } from '@angular/core';

import { UsuarioServiceService } from '../../services/usuario-service.service'
import { Subject } from 'rxjs';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  tittle = "Informacion a mostrar"
  data_two_way_headers = ["Nombre(s)", "Apellido(s)", "Correo Electronico"]
  data_two_way_content = []

  dtOptions: DataTables.Settings = {};
  persons = [];

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private userService: UsuarioServiceService) { }

  funcionDeTS(): void {
    console.log("the function 'nuevaFuncion' was executed.")
  }
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.userService.getUsers().subscribe(res=>{
      this.data_two_way_content = res.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      }).sort()
      this.dtTrigger.next();
    }
    );
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
