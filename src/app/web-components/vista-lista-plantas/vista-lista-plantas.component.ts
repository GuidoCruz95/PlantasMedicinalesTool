import { Component, OnInit } from '@angular/core';
import { NuevoServicioPlantasService } from '../../services/nuevo-servicio-plantas.service'

@Component({
  selector: 'app-vista-lista-plantas',
  templateUrl: './vista-lista-plantas.component.html',
  styleUrls: ['./vista-lista-plantas.component.css']
})
export class VistaListaPlantasComponent implements OnInit {

  listaPlantas = []
  constructor(private plantasService: NuevoServicioPlantasService) { } 

  agregarNuevoElementoAlistaPlantas(): void {
    var nuevoElemento = {
      "foto": "NuevoItemName", 
      "nombre": "NuevoElemnt"
    }

    this.listaPlantas.push(nuevoElemento)
  }
  ngOnInit(): void {
    this.plantasService.getPlantas().subscribe(res=>{
      this.listaPlantas = res.map(a => {
        const dato = a.payload.doc.data();
        dato.id = a.payload.doc.id;
        return dato;
      })
    }
    );
  }

}
