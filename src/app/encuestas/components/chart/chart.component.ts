import { Component, OnInit, Input } from '@angular/core';
import { RespuestaReporte } from '../../interfaces/respuestareporte.interface';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public chart: any;

  private labels: string[] = [];

  @Input() public resultEncuestas: RespuestaReporte[] = [];

  private data: dataToChart[] = [];

  ngOnInit(): void {
    this.loadInit();
  }

  loadInit() {
    this.cargarInformacion();
    this.createChart()
  }

  cargarInformacion() {
    this.labels = this.resultEncuestas.map(date => date.fecha.toString());
    
    const arrayOpciones = this.resultEncuestas.map( res => {
      return res.reporte.map(reporte => reporte.respuesta);
    });

    const result: string[] = [];
    const newData = arrayOpciones.map((value, idx) => {
      result.push(...value);
    });

    const elementosUnicos = result.filter((elemento, index, self) => {
      return self.indexOf(elemento) === index;
    });

    const resultados = elementosUnicos.map(respuesta => {

      const datosValidar = this.resultEncuestas.map((res, idx) => {

        return res.reporte.filter(reporte => reporte.respuesta == respuesta).map(c => c.cantidad).join();
      });

      return datosValidar;    
    });

    resultados.map((item, idx) => {

      this.data.push({
        label: elementosUnicos[idx],
        data: item

      });
    });
  }

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.labels,
        datasets: this.data
      },
      options: {
        aspectRatio: 3
      }

    });
  }

}

interface dataToChart {
  label: string;
  data: string[];
}
