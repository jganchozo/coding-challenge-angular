import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { AlertComponent } from './components/alert/alert.component';
import { MainComponent } from './pages/main/main.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { ReporteEncuestasComponent } from './pages/reporte-encuestas/reporte-encuestas.component';
import { ReporteCalculosComponent } from './pages/reporte-calculos/reporte-calculos.component';
import { ChartComponent } from './components/chart/chart.component';
import { EncuestasRoutingModule } from './encuestas-routing.module';
import { ListadoPageComponent } from './pages/listado-page/listado-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListadoDetallesPageComponent } from './pages/listado-detalles-page/listado-detalles-page.component';
import { ItemComponent } from './components/item/item.component';
import { OpcionNumberComponent } from './components/opcion-number/opcion-number.component';
import { ReporteDetalladoComponent } from './pages/reporte-detallado/reporte-detallado.component';


@NgModule({
  declarations: [
    CardComponent,
    AlertComponent,
    MainComponent,
    DetallesComponent,
    ReporteEncuestasComponent,
    ReporteCalculosComponent,
    ChartComponent,
    ListadoPageComponent,
    ListadoDetallesPageComponent,
    ItemComponent,
    OpcionNumberComponent,
    ReporteDetalladoComponent
  ],
  imports: [
    CommonModule,
    EncuestasRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class EncuestasModule { }
