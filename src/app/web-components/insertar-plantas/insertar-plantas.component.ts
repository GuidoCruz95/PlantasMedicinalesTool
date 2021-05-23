import { Component, OnInit } from '@angular/core';
import { PlantaService } from '../../services/plantas/planta.service'
import { Router } from '@angular/router'
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';

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
  previa : any
  foto:any = ""
  file: any


  constructor(private plantaService: PlantaService,
    private afStorage: AngularFireStorage,
    private router: Router
    ) { }

    async upload(event) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (_event) => { 
        this.previa = reader.result; 
      }


      this.file = event.target.files[0]
      this.previa = this.file.webkitRelativePath
      console.log(this.file)
      console.log("new image selected.")
    }

  async registrar_planta() {
    this.showNotification("Iniciando el registro, espere por favor.", 'warning');
    const snap = await this.afStorage.upload(this.file.name, this.file)
    this.foto = await snap.ref.getDownloadURL();
    this.planta$.foto = this.foto
    // this.showNotification("Falta cargar imagen para guardar la informacion de la planta.", 'info');
    this.plantaService.createPlantas(this.planta$).then(() => {
      console.log("Guardado....");
      this.router.navigate(['./vista-lista-plantas']);
      this.showNotification("Planta registrada correctamente.", 'info');
    })
    .catch((error) => {
      console.log("Error al registrar datos.");
      this.showNotification("Error al registrar la planta en el sistema", 'danger');
    });
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
