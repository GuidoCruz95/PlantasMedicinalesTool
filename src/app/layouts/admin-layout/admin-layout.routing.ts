import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ListaUsuariosComponent } from '../../web-components/lista-usuarios/lista-usuarios.component';
import { ComponenteDePruebaComponent } from '../../web-components/componente-de-prueba/componente-de-prueba.component'
import { VistaListaPlantasComponent } from '../../web-components/vista-lista-plantas/vista-lista-plantas.component';
import { LoginComponent } from '../../web-components/login/login.component';
import { Component } from '@angular/core';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'lista-usuarios',  component: ListaUsuariosComponent },
    { path: 'componente-prueba',  component: ComponenteDePruebaComponent},
    { path: 'vista-lista-plantas', component:  VistaListaPlantasComponent},
    { path: 'login', component:  LoginComponent},
];
