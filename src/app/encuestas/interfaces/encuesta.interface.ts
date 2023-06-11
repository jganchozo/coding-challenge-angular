import { Pregunta } from "./pregunta.interface";

export interface Encuesta {
    idencuesta: number;
    titulo: string;
    descripcion: string;
    fecha: Date;
    Pregunta: Pregunta[]
}