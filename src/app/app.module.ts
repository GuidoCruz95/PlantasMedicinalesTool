import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { DataTablesModule } from "angular-datatables";

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ListaUsuariosComponent } from './web-components/lista-usuarios/lista-usuarios.component';
import { ComponenteDePruebaComponent } from './web-components/componente-de-prueba/componente-de-prueba.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'environments/environment'
import { VistaListaPlantasComponent } from './web-components/vista-lista-plantas/vista-lista-plantas.component';
import { LoginComponent } from './web-components/login/login.component';
import { InsertarPlantasComponent } from './web-components/insertar-plantas/insertar-plantas.component';

import { BrowserModule } from '@angular/platform-browser';
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { ReactiveFormsModule } from "@angular/forms";
import { DetallePlantaComponent } from './web-components/detalle-planta/detalle-planta/detalle-planta.component';
import { RegistrarUserComponent } from './web-components/registrar-user/registrar-user.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    DataTablesModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ListaUsuariosComponent,
    ComponenteDePruebaComponent,
    VistaListaPlantasComponent,
    LoginComponent,
    InsertarPlantasComponent,
    DetallePlantaComponent,
    RegistrarUserComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

