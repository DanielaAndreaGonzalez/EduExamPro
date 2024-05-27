import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from '../question/question.component';
import { CommonModule } from '@angular/common';
import { Quiz } from '../../models/Quiz';
import { QuizService } from '../../services/quiz.service';
import { InfoQuizPreguntas } from '../../models/InfoQuizPreguntas';

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [FormsModule, CommonModule,QuestionComponent],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent {

  quizzes: Quiz[] = [];
  infoQuizPreguntas!:InfoQuizPreguntas;
  questions = [
    {
      text: '¿Cuál es la capital de Francia?',
      options: ['Londres', 'Madrid', 'París', 'Berlín'],
      answer: ''
    },
    // Añadir más preguntas aquí
  ];

  constructor(private quizService: QuizService) {}
  ngOnInit(): void {
    this.loadQuizzes();
  }

  submitExam(): void {
    // Enviar las respuestas al backend o a un servicio para ser evaluadas
    console.log('Respuestas del examen', this.questions);
  }

  loadQuizzes() {
    this.quizService.getQuizzes().subscribe({
      next: (quizzes) => {

        this.quizzes = quizzes;
      },
      error: (error) => {
        console.error('Error al obtener quizzes', error);
      }
    });
  }

  respondeQuiz(idExamen?:number){
    if(idExamen){
      this.quizService.getInfoQuizPreguntas(idExamen).subscribe({
        next: (infoQuizPreguntas) => {
          this.infoQuizPreguntas = infoQuizPreguntas;
        },
        error: (error) => console.error('Error al añadir pregunta', error)
      });
    }

  }
}
