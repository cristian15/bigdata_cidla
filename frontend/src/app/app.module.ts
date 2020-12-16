import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { HistorialComponent } from './components/historial/historial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SesionesComponent } from './components/sesiones/sesiones.component';

import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HistorialComponent,
    SesionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    DragDropModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
