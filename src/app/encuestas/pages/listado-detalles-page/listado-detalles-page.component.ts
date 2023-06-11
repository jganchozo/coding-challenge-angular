import { Component, Input, OnInit } from '@angular/core';
import { Pregunta } from '../../interfaces/pregunta.interface';
import { FormControl, FormGroup, Validators, FormBuilder  } from '@angular/forms';
import { Respuesta, RespuestaEncuesta } from '../../interfaces/respuesta.interface';
import { Encuesta } from '../../interfaces/encuesta.interface';
import { EncuestaService } from '../../services/encuesta.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/auth/services/local-storage.service';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-listado-detalles-page',
  templateUrl: './listado-detalles-page.component.html',
  styleUrls: ['./listado-detalles-page.component.css']
})
export class ListadoDetallesPageComponent implements OnInit {

  @Input() public preguntas: Pregunta[] = [];
  @Input() public tituloEncuesta: string = '';

  formulario: FormGroup;
  private respuesta: Respuesta[] = [];
  user: User | null = null;

  public encuesta: Encuesta = {
    descripcion: '',
    fecha: new Date(),
    idencuesta: 0,
    Pregunta: [],
    titulo: ''
  };
  private respuestaEncuesta: RespuestaEncuesta = {
    fecha: new Date(),
    idencuesta: 0,
    idencuestado: 0,
    uidUsuario: '',
    respuestas: []
  };

  public errors: boolean = false;
  @Input() public idEncuesta: number = 0;

  constructor(private formBuilder: FormBuilder, 
              private encuestaService: EncuestaService, 
              private toastr: ToastrService,
              private localStorageService: LocalStorageService){
    this.formulario = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.iniciarComponente();
  }

  iniciarComponente() {

    this.user = this.localStorageService.getItem('user');

    this.preguntas.forEach(pregunta => {
      const control = this.formBuilder.control('', Validators.required);
      this.formulario.addControl(pregunta.idpregunta.toString(), control);
    });
  }

  guardarEncuesta() {

    if (this.formulario.valid) {
      this.errors = false;
      console.log(this.formulario.value);

      let claves = Object.keys(this.formulario.value);

      for (let i = 0; i < claves.length; i++) {

        let clave = claves[i];

        this.respuesta.push({
          idpregunta: Number(clave),
          respuesta: this.formulario.value[clave],
          idtipoRespuesta: 0,
        });

      }

      this.respuestaEncuesta = {
        fecha: new Date(),
        idencuesta: this.idEncuesta,
        idencuestado: 0,
        uidUsuario: this.user!.uid,
        respuestas: this.respuesta,
      };
      
      console.log(this.respuestaEncuesta);
      
      this.encuestaService.postRespuestas(this.respuestaEncuesta).subscribe(
        {
          next: (data) => {
            if (data) {
              this.showSuccessToast('Encuesta procesada correctamente');
            }
          },
          error: (err: any) => { 
            console.log('Error obteniendo la informacion del servicio'); 
            this.errors = true;
          },
          complete: () => { }
        }
      );

      this.respuesta = [];
      this, this.respuestaEncuesta = {
        fecha: new Date(),
        idencuesta: 0,
        idencuestado: 0,
        uidUsuario: '',
        respuestas: []
      };
      this.formulario.reset();

    } else {
      this.errors = true;
      console.log('Todos son obligatorios');
      this.showInfoToast('Por favor, debe responder toda la encuesta');
    }
  }

  showSuccessToast(message: string) {
    this.toastr.success(message, 'Success');
  }

  showInfoToast(message: string) {
    this.toastr.info(message, 'Info');
  }

  showWarningToast() {
    this.toastr.warning('This is a warning toast!', 'Warning');
  }

  showErrorToast() {
    this.toastr.error('This is an error toast!', 'Error');
  }
}