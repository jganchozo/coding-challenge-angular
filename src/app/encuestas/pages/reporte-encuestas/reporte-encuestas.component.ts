import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../services/reportes.service';
import { RespuestaReporte } from '../../interfaces/respuestareporte.interface';

@Component({
  selector: 'app-reporte-encuestas',
  templateUrl: './reporte-encuestas.component.html',
  styleUrls: ['./reporte-encuestas.component.css']
})
export class ReporteEncuestasComponent implements OnInit {

  public resultEncuestas: RespuestaReporte[] = [];
  constructor(private reportesService: ReportesService){}
  
  ngOnInit(): void {
    this.loadInit()
  }

  loadInit(){
    this.reporteEncuestas();
  }

  reporteEncuestas() {
    this.reportesService.getEncuestas("Preferencias de comida").subscribe(
      {
        next: (data) => {
          this.resultEncuestas = [...data];
        },
        error: (err: any) => {
          console.log('Error obteniendo la informacion del servicio');
        },
        complete: () => { }
      }
    );
  }


}
