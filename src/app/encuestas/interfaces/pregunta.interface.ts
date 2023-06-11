import { Opcion } from "./opcion.interface";

export interface Pregunta {
    idpregunta: number;
    idencuesta: number;
    pregunta1: string;
    encuesta: string
    idtipoRespuesta: number;
    opciones: Opcion[];
    orden: number
}
