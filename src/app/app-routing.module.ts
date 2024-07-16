import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DocentesComponent } from './docentes/docentes.component';
import { LoginComponent } from './login/login.component';
import { RegistroTutoriasComponent } from './registro-tutorias/registro-tutorias.component';
import { RegistroComponent } from './registro/registro.component';
import { TemasComponent } from './temas/temas.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'docentes', component: DocentesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'registrotutorias', component: RegistroTutoriasComponent },
  { path: 'temas', component: TemasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
