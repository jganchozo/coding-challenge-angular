export interface RespuestaReporte {
    fecha: Date;
    cantidad: number;
    reporte: RespuestaCantidad[];
}

export interface RespuestaCantidad {
    respuesta: string;
    cantidad: number;
}