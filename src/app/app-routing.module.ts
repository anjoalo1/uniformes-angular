import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { NuevacotizacionComponent } from './componentes/nuevacotizacion/nuevacotizacion.component';

const routes: Routes = [
  { path: 'first-component', component: AppComponent },
  { path: 'cotizacion', component: CotizacionComponent },
  {path: 'nuevacotizacion', component: NuevacotizacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
