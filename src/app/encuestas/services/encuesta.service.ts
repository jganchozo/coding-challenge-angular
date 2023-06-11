import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pregunta } from '../interfaces/pregunta.interface';
import { RespuestaEncuesta } from '../interfaces/respuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(private http: HttpClient) { }

  getEncuestas(): Observable<any> {
    return this.http.get('https://localhost:44372/api/Encuesta');
  }

  getPreguntas(id: number | string): Observable<Pregunta[]> {
    return this.http.get<Pregunta[]>(`https://localhost:44372/api/Encuesta/${id}`);
  }

  postRespuestas(data: RespuestaEncuesta): Observable<any> {
    return this.http.post('https://localhost:44372/api/Respuestas', data)
  }
}