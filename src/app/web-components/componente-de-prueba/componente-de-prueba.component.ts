import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-de-prueba',
  templateUrl: './componente-de-prueba.component.html',
  styleUrls: ['./componente-de-prueba.component.css']
})
export class ComponenteDePruebaComponent implements OnInit {
  tittle = "ESTO ESTA ESCRITO EN EL ARCHIVO TS, actualizado"
  constructor() { }

  ngOnInit(): void {
  }

}
