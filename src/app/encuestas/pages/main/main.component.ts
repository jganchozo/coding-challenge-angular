import { Component, OnInit } from '@angular/core';
import { EncuestaService } from '../../services/encuesta.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public encuestas: any = [];
  public errors: boolean = false;

  constructor(private encuestaService: EncuestaService) { }

  
  ngOnInit(): void {

    this.encuestaService.getEncuestas().subscribe(
      {
        next: (data) => {
          this.encuestas = data;
          this.errors = false;
        },
        error: (err: any) => {
          console.log('Error obteniendo la informacion del servicio');
          this.errors = true;
        },
        complete: () => { }
      }
    );
  }
}
