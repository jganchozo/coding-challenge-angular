import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../services/reportes.service';

@Component({
  selector: 'app-reporte-detallado',
  templateUrl: './reporte-detallado.component.html',
  styleUrls: ['./reporte-detallado.component.css']
})
export class ReporteDetalladoComponent implements OnInit {

  public preguntasOpciones: any[] = [];

  constructor(private reportesService: ReportesService) { }
  ngOnInit(): void {
    this.loadInit();
  }

  loadInit() {
    this.preguntaOpciones();
  }

  preguntaOpciones() {
    this.reportesService.getEncuestasOpciones().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.preguntasOpciones = [...data];
        },
        error: (err: any) => {
          console.log('Error obteniendo la informacion del servicio');
        },
        complete: () => { }
      }
    );
  }
}
