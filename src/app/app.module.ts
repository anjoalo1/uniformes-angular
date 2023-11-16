import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NuevacotizacionComponent } from './componentes/nuevacotizacion/nuevacotizacion.component';

@NgModule({
  declarations: [
    AppComponent,
    CotizacionComponent,
    NuevacotizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
