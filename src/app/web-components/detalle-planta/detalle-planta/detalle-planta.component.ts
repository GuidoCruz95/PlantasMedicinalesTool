import { Component, OnInit } from '@angular/core'
import { PlantaService } from '../../../services/plantas/planta.service'
import {ActivatedRoute} from '@angular/router';

import { Observable } from 'rxjs';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-detalle-planta',
  templateUrl: './detalle-planta.component.html',
  styleUrls: ['./detalle-planta.component.css']
})
export class DetallePlantaComponent implements OnInit {

  plantaNombre
  planta$

  constructor(private plantaService: PlantaService
    ,private route: ActivatedRoute) { }

  loadData() {
    this.plantaService.getPlantas().subscribe(res => {
      for (var _i = 0; _i < res.length; _i++) {
        let planta = res[_i]
        if(planta.nombre == this.plantaNombre){
          this.planta$ = planta
        }
      }
    })
    
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.plantaNombre = params['id'];
      this.loadData()
    });
  }

}
