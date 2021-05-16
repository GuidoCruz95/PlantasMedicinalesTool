import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from "rxjs/operators";
import { PlantaService } from '../../services/plantas/planta.service'

@Component({
  selector: 'app-insertar-plantas',
  templateUrl: './insertar-plantas.component.html',
  styleUrls: ['./insertar-plantas.component.css']
})
export class InsertarPlantasComponent implements OnInit {
  planta$ = {
    'nombre': "Planta Nueva",
    'nombre_cientifico': "nombre scientifico",
    'beneficios': "Beneficios de la planta",
    'origen': "Origen de la planta",
    'usos_medicinales': "Usos medicinales de la planta"
  }

  constructor(private plantaService: PlantaService) { }

  loadData() {

  }

  ngOnInit(): void {
  }
}
