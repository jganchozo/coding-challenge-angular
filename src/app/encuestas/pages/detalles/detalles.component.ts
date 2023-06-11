import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EncuestaService } from '../../services/encuesta.service';
import { Pregunta } from '../../interfaces/pregunta.interface';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  public preguntas: Pregunta[] = [];

  public errors: boolean = false;
  public idEncuesta: number = 0;

  constructor(private encuestaService: EncuestaService, private activatedRoute: ActivatedRoute){}
  
  ngOnInit(): void {
    this.iniciarComponente();
  }

  iniciarComponente(){

    this.activatedRoute.paramMap.subscribe(params => {

      const id = params.get('id')!;
      this.idEncuesta = Number(id);

      this.encuestaService.getPreguntas(id).subscribe(async (data) => {
        this.preguntas = data;
      });
    });
  }
}
