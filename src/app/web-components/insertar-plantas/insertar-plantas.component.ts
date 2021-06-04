import { Component, OnInit } from '@angular/core';
import { PlantaService } from '../../services/plantas/planta.service'
import { Router } from '@angular/router'
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { not } from '@angular/compiler/src/output/output_ast';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';

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
  previa : any = false;
  foto:any = ""
  file: any

  formularioValido = false
  imageZise = 0

  regex = /^[a-zA-Z0-9]+$/

  exists = false
  atributo

  constructor(private plantaService: PlantaService,
    private afStorage: AngularFireStorage,
    private router: Router
    ) { }

    async upload(event) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (_event) => { 
        this.imageZise = _event.total
        console.log(this.imageZise)
        this.previa = reader.result; 
        this.validarFormulario()
      }

      this.file = event.target.files[0]
      this.previa = this.file.webkitRelativePath
    }

  async registrar_planta() {
    this.verify()
    if(this.exists){
      this.showNotification("Otra planta con el mismo "+this.atributo+" ya existe en el sistema.", 'danger');
    } else {
      this.showNotification("Iniciando el registro, espere por favor.", 'warning');
      const snap = await this.afStorage.upload(this.file.name, this.file)
      this.foto = await snap.ref.getDownloadURL();
      this.planta$.foto = this.foto
      if(!this.exists){
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
    }
  }

  verify(){
    this.plantaService.getPlantas().subscribe(res => {
      for (var _i = 0; _i < res.length; _i++) {
        let planta = res[_i]
        if(planta.nombre == this.planta$.nombre){
          this.exists = true
          this.atributo = "nombre"
        } else {
          if(planta.nombre_cientifico == this.planta$.nombre_cientifico){
            this.exists = true
            this.atributo = "nombre cientifico"
          }
        }
      }
    })
  }

  validarFormulario(){
    console.log(this.foto)
    if (
      this.previa !== false &&
      (this.planta$.nombre.length >2 && this.planta$.nombre.length <= 40 && this.planta$.nombre.match(this.regex)) &&
      (this.planta$.nombre_cientifico.length >=5 && this.planta$.nombre_cientifico.length <= 40 && this.planta$.nombre_cientifico.match(this.regex)) &&
      (this.planta$.beneficios.length >=10 && this.planta$.beneficios.length <= 40) &&
      (this.planta$.usos_medicinales.length >=10 || this.planta$.usos_medicinales.length == 0) &&
      ((this.planta$.origen.length >=10  && this.planta$.origen.match(this.regex)) || this.planta$.origen.length == 0) &&
      (this.imageZise < 5242880)
      ){
      this.formularioValido = true
    } else {
      if(this.imageZise > 5242880){
        this.showNotification("La imagen que selecciono, excede los 5Mb permitidos", 'danger');
      }
      this.formularioValido = false
    }
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
    this.verify()
  }
}
