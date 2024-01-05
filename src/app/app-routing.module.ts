import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { NuevacotizacionComponent } from './componentes/nuevacotizacion/nuevacotizacion.component';
import { CreatorpdfComponent } from './componentes/creatorpdf/creatorpdf.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'cotizacion', component: CotizacionComponent },
  {path: 'nuevacotizacion', component: NuevacotizacionComponent},
  {path: 'creatorpdf', component: CreatorpdfComponent},
  { path: '',   redirectTo: '', pathMatch: 'full' },
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
