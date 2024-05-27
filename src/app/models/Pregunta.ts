import { Opcion } from "./Opcion";

export interface Pregunta {
id: number;
texto: string;
opciones: Opcion[];
esPublica: boolean;
}
