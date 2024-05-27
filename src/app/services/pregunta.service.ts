import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pregunta } from '../models/Pregunta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  private baseUrl = 'http://localhost:8081/api/pregunta';
  constructor(private http: HttpClient) { }

  createQuiz(pregunta: Pregunta): Observable<any> {
    return this.http.post(`${this.baseUrl}`, pregunta);
  }

  getPreguntas(): Observable<Pregunta[]> {
    return this.http.get<Pregunta[]>(this.baseUrl);
  }
}
