import { Component, OnInit } from '@angular/core';
import { PlantaService } from '../../services/plantas/planta.service'
import { Router } from '@angular/router'

declare var $:any;
@Component({
  selector: 'app-insertar-plantas',
  templateUrl: './insertar-plantas.component.html',
  styleUrls: ['./insertar-plantas.component.css']
})
export class InsertarPlantasComponent implements OnInit {
  planta$ = {
    'nombre': "",
    'nombre_cientifico': "",
    'beneficios': "",
    'origen': "",
    'usos_medicinales': "",
    'foto': ""
  }

  constructor(private plantaService: PlantaService,
    private router: Router) { }

  registrar_planta() {
    this.showNotification("Falta cargar imagen para guardar la informacion de la planta.", 'info');
    // this.plantaService.createPlantas(this.planta$).then(() => {
    //   console.log("Guardado....");
    //   this.router.navigate(['./vista-lista-plantas']);
    //   this.showNotification("Planta registrada correctamente.", 'info');
    // })
    // .catch((error) => {
    //   console.log("Guardado....");
    //   this.showNotification("Error al registrar la planta en el sistema", 'danger');
    // });
  }

  showNotification(message, type){
    $.notify({
        icon: "pe-7s-gift",
        message: message
    },{
        type: type,
        timer: 1000,
        placement: {
            from: 'top',
            align: 'right'
        }
    });
}

  ngOnInit(): void {
  }
}
