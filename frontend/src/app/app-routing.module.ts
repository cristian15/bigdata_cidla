import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsolaComponent } from './components/consola/consola.component';
import { HistorialComponent } from './components/historial/historial.component';
import { PrincipalComponent } from './components/principal/principal.component';


const routes: Routes = [
  {
    path: '', component: PrincipalComponent
  },
  {
    path: 'consola', component: ConsolaComponent
  },
  {
    path: 'historial', component: HistorialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
