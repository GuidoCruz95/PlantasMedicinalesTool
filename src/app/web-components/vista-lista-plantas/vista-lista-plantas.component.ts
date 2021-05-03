import { Component, OnInit } from '@angular/core';
import { PlantaService } from '../../services/plantas/planta.service'

import { Observable } from 'rxjs';

@Component({
  selector: 'app-vista-lista-plantas',
  templateUrl: './vista-lista-plantas.component.html',
  styleUrls: ['./vista-lista-plantas.component.css']
})
export class VistaListaPlantasComponent implements OnInit {

  plantas$: Observable<any[]>;

  constructor(private plantaService: PlantaService) { }

  ngOnInit(): void {
    this.plantas$ = this.plantaService.getPlantas();
  }
}
