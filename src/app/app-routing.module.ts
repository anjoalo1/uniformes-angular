import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { NuevacotizacionComponent } from './componentes/nuevacotizacion/nuevacotizacion.component';
import { CreatorpdfComponent } from './componentes/creatorpdf/creatorpdf.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'cotizacion', component: CotizacionComponent },
  {path: 'nuevacotizacion', component: NuevacotizacionComponent},
  {path: 'creatorpdf', component: CreatorpdfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
