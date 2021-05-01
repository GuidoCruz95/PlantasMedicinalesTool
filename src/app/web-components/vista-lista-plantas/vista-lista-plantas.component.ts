import { Component, OnInit } from '@angular/core';
import { NuevoServicioPlantasService } from '../../services/nuevo-servicio-plantas.service'

@Component({
  selector: 'app-vista-lista-plantas',
  templateUrl: './vista-lista-plantas.component.html',
  styleUrls: ['./vista-lista-plantas.component.css']
})
export class VistaListaPlantasComponent implements OnInit {

  listaPlantas: any[];
  lista: any[];
  
  constructor(private plantasService: NuevoServicioPlantasService) { } 

  ngOnInit() {
    this.plantasService.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.listaPlantas = list.map(item => { return item.payload.val(); });
        this.lista =  Array.from(Array(Math.ceil((this.listaPlantas.length+1) / 3)).keys());
      }
    );
  }

}
