import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../models/Quiz';
import { QuizPreguntaDto } from '../models/QuizPreguntaDto';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private baseUrl = 'http://localhost:8081/api/examenes';

  constructor(private http: HttpClient) { }

  createQuiz(quizData: Quiz): Observable<any> {
    return this.http.post(`${this.baseUrl}`, quizData);
  }

  getQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(`${this.baseUrl}`);
  }

  getQuizById(id: number): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.baseUrl}/${id}`);
  }

  getInfoQuizPreguntas(idQuiz:number): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/find-examen-preguntas/${idQuiz}`);
  }

  addPreguntaToQuiz(quizPreguntaDto:QuizPreguntaDto): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-pregunta-to-quiz`, quizPreguntaDto);
  }

  removePreguntaFromQuiz(quizId: number, preguntaId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/quizzes/${quizId}/preguntas/${preguntaId}`);
  }

}
