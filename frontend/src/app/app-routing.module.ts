import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistorialComponent } from './components/historial/historial.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SesionesComponent } from './components/sesiones/sesiones.component';


const routes: Routes = [
  {
    path: '', component: PrincipalComponent
  },
  {
    path: 'historial', component: HistorialComponent
  },
  {
    path: 'sesiones', component: SesionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
