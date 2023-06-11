export interface RespuestaEncuesta {
    idencuesta: number;
    idencuestado: number;
    uidUsuario: string;
    fecha: Date;
    respuestas: Respuesta[]
}

export interface Respuesta {
    idpregunta: number;
    respuesta: string;
    idtipoRespuesta: number;
}
