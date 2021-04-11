import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  tittle = "Informacion a mostrar"
  data_two_way_headers = ["Name", "LastName"]
  data_two_way_content = [
    {
      "name": "Juanito", 
      "lastName": "Perez"
    },
    {
      "name": "Jose", 
      "lastName": "Perez"
    },
    {
      "name": "Andra", 
      "lastName": "Santivanhiez"
    },
    {
      "name": "Daniela", 
      "lastName": "Sanjines"
    }
  ]

  constructor() { }

  agregarNuevoElementoADataTwoWay(): void {
    var nuevoElemento = {
      "name": "NuevoItemName", 
      "lastName": "NuevoElemnt:astName"
    }

    this.data_two_way_content.push(nuevoElemento)
  }

  funcionDeTS(): void {
    console.log("the function 'nuevaFuncion' was executed.")
  }
  
  ngOnInit(): void {
  }

}
