import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from '../question/question.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [FormsModule, CommonModule,QuestionComponent],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent {
  questions = [
    {
      text: '¿Cuál es la capital de Francia?',
      options: ['Londres', 'Madrid', 'París', 'Berlín'],
      answer: ''
    },
    // Añadir más preguntas aquí
  ];

  submitExam(): void {
    // Enviar las respuestas al backend o a un servicio para ser evaluadas
    console.log('Respuestas del examen', this.questions);
  }
}
