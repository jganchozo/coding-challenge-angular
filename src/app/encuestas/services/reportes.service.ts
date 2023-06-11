import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespuestaReporte } from '../interfaces/respuestareporte.interface';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor(private http: HttpClient) { }

  getEncuestas(encuesta: string): Observable<RespuestaReporte[]> {
    return this.http.get<RespuestaReporte[]>(`https://localhost:44372/api/Reportes/PrimerReporte/${encuesta}`);
  }

  getEncuestasOpciones(): Observable<any[]> {
    return this.http.get<any[]>(`https://localhost:44372/api/Reportes/SegundoReporte`);
  }
}