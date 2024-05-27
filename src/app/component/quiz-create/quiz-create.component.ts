import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionCreateComponent } from '../question-create/question-create.component';
import { QuizService } from '../../services/quiz.service';
import { Quiz } from '../../models/Quiz';
import { Curso } from '../../models/Curso';
import { CursoService } from '../../services/curso.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './quiz-create.component.html',
  styleUrl: './quiz-create.component.css'
})
export class QuizCreateComponent {
  quiz:Quiz = {
    nombre: '',
    descripcion: '',
    categoria: ''
  };
  categories = ['Business', 'Computers & Tech', 'Education & Exams', 'Fun Quizzes', 'Miscellaneous', 'Personality Quizzes', 'Trivia'];
  cursos: Curso[] = [];
  quizzes: Quiz[] = [];

  constructor(private quizService: QuizService, private cursoService: CursoService,  private router: Router) {}

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe({
      next: (cursos) => {
        this.cursos = cursos;
      },
      error: (error) => {
        console.error('Error al obtener cursos', error);
      }
    });

    this.loadQuizzes();
  }

  createQuiz(): void {
    this.quizService.createQuiz(this.quiz).subscribe({
      next: (response) => {
        console.log('Quiz creado', response);
      },
      error: (error) => {
        console.error('Error al crear el quiz', error);
      },
      complete: () => console.log('Completado') // Esta es opcional, solo si necesitas hacer algo cuando se complete el observable.
    });
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

  agregarPreguntas(idQuiz?: number) {
    console.log('idQuiz', idQuiz);
    // Redireccionar a la página de edición de preguntas del quiz
    this.router.navigate(['/edit-quiz', idQuiz]); // Asegúrate de que la ruta esté configurada correctamente
  }
}
