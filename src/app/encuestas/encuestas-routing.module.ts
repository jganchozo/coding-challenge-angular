import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ReporteEncuestasComponent } from './pages/reporte-encuestas/reporte-encuestas.component';
import { ReporteCalculosComponent } from './pages/reporte-calculos/reporte-calculos.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { canActivate, redirectUnauthorizedTo } from "@angular/fire/auth-guard";
import { ReporteDetalladoComponent } from './pages/reporte-detallado/reporte-detallado.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
    },
    {
        path: 'encuestas',
        component: ReporteEncuestasComponent,
        ...canActivate(() => redirectUnauthorizedTo(['auth/login']))
    },
    {
        path: 'calculos',
        component: ReporteCalculosComponent,
        ...canActivate(() => redirectUnauthorizedTo(['auth/login']))
    },
    {
        path: 'encuesta/:id',
        component: DetallesComponent,
        ...canActivate(() => redirectUnauthorizedTo(['auth/login']))
    },
    {
        path: 'detallado',
        component: ReporteDetalladoComponent,
        ...canActivate(() => redirectUnauthorizedTo(['auth/login']))
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EncuestasRoutingModule { }