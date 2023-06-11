import { Component, Input } from '@angular/core';
import { Pregunta } from '../../interfaces/pregunta.interface';
import { FormControl, FormGroup, Validators, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-opcion-number',
  templateUrl: './opcion-number.component.html',
  styleUrls: ['./opcion-number.component.css']
})
export class OpcionNumberComponent {

  @Input() formGroup!: FormGroup;
  
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
