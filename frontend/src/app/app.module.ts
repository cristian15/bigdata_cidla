import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ConsolaComponent } from './components/consola/consola.component';
import { GraficasComponent } from './components/graficas/graficas.component';
import { HistorialComponent } from './components/historial/historial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { AccionesComponent } from './components/acciones/acciones.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ConsolaComponent,
    GraficasComponent,
    HistorialComponent,
    AccionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
