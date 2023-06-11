import { Component, Input } from '@angular/core';
import { Pregunta } from '../../interfaces/pregunta.interface';
import { FormControl, FormGroup, Validators, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() formGroup!: FormGroup ;
  @Input() public idPregunta: number=0;

  @Input()
  public pregunta: Pregunta = {
    encuesta: '',
    idencuesta: 0,
    idpregunta: 0,
    idtipoRespuesta: 0,
    opciones: [],
    pregunta1: '',
    orden:0
  };

}
