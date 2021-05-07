import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from "rxjs/operators";
import { InsertPlantaService } from '../../services/insertar planta/insert-planta.service'

@Component({
  selector: 'app-insertar-plantas',
  templateUrl: './insertar-plantas.component.html',
  styleUrls: ['./insertar-plantas.component.css']
})
export class InsertarPlantasComponent implements OnInit {

  imagen: string;
  seleccionaImagen: any = null;
  Submit: boolean;

  insertarImagen = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required)
  })
  constructor(private storage: AngularFireStorage, private service: InsertPlantaService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imagen = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.seleccionaImagen = event.target.files[0];
    }
    else {
      this.imagen = '/assets/img/seleccione.png';
      this.seleccionaImagen = null;
    }
  }
  onSubmit(formValue) {
    this.Submit = true;
    if (this.insertarImagen.valid) {
      var filePath = `${formValue.category}/${this.seleccionaImagen.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.seleccionaImagen).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.service.insertImageDetails(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }
  get formControls() {
    return this.insertarImagen['controls'];
  }
  resetForm() {
    this.insertarImagen.reset();
    this.insertarImagen.setValue({
      nombre: '',
      imageUrl: '',
      descripcion: 'descripcion de la planta'
    });
    this.imagen = '/assets/img/seleccione.png';
    this.seleccionaImagen = null;
    this.Submit = false;
  }
}
