export interface Quiz {
  idExamen?:number
  nombre: string;
  descripcion: string;
  categoria: string;
  fechaDisponible?: Date; // Opcional si quieres que pueda ser nulo
  tiempoLimite?: number;  // Opcional si quieres que pueda ser nulo
  idCurso?: number;       // El ID del curso al que pertenece el examen
}
