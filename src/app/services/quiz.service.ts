import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../models/Quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private baseUrl = 'http://localhost:8081/api/examenes'; // Ajusta esto a la URL de tu back-end

  constructor(private http: HttpClient) { }

  createQuiz(quizData: Quiz): Observable<any> {
    return this.http.post(`${this.baseUrl}`, quizData);
  }
}
