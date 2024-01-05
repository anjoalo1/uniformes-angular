import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevacotizacionComponent } from './componentes/nuevacotizacion/nuevacotizacion.component';
import { CreatorpdfComponent } from './componentes/creatorpdf/creatorpdf.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio'; 
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CotizacionComponent,
    NuevacotizacionComponent,
    CreatorpdfComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatRadioModule,
    FormsModule,
    MatInputModule,  NgFor, MatSelectModule, MatFormFieldModule, MatIconModule, MatDividerModule,MatButtonModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
