import { Component } from '@angular/core';
import { Quiz } from '../../models/Quiz';
import { QuizService } from '../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfoQuizPreguntas } from '../../models/InfoQuizPreguntas';
import { QuestionCreateComponent } from '../question-create/question-create.component';
import { QuizPreguntaDto } from '../../models/QuizPreguntaDto';
import { Pregunta } from '../../models/Pregunta';
import { PreguntaService } from '../../services/pregunta.service';

@Component({
  selector: 'app-edit-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule, QuestionCreateComponent],
  templateUrl: './edit-quiz.component.html',
  styleUrl: './edit-quiz.component.css'
})
export class EditQuizComponent {
  quiz?: Quiz;
  searchTerm: string = '';
  infoQuizPreguntas!:InfoQuizPreguntas;
  nuevaPregunta: Pregunta = {id: 0 , texto: '', opciones: [], esPublica:false };
  preguntasDisponibles: Pregunta[] = [];
  preguntasFiltradas: Pregunta[] = [];

  constructor(private quizService: QuizService, private route: ActivatedRoute, private preguntaService: PreguntaService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.quizService.getQuizById(id).subscribe(quiz => this.quiz = quiz);
      this.quizService.getInfoQuizPreguntas(id).subscribe({
        next: (infoQuizPreguntas) => {
          this.infoQuizPreguntas = infoQuizPreguntas
          this.cargarPreguntasDisponibles();
          console.log('Pregunta añadida', infoQuizPreguntas);
        },
        error: (error) => console.error('Error al añadir pregunta', error)
      });
    });
  }

  addPregunta(idPregunta:number) {
    if (this.quiz && this.quiz.idExamen ){
      const quizPreguntaDto: QuizPreguntaDto = {
        idPregunta: idPregunta,
        idQuiz: this.quiz.idExamen
      };
      this.quizService.addPreguntaToQuiz(quizPreguntaDto).subscribe({
        next: (pregunta) => {
          console.log('Pregunta añadida', pregunta);
        },
        error: (error) => console.error('Error al añadir pregunta', error)
      });
    }
  }

  eliminarPregunta(idPregunta: number) {
    if (this.quiz && this.quiz.idExamen) {
      this.quizService.removePreguntaFromQuiz(this.quiz.idExamen, idPregunta).subscribe({
        next: () => {
          console.log('Pregunta eliminada con éxito');
          // Actualizar la lista de preguntas en el frontend
          this.infoQuizPreguntas.preguntas = this.infoQuizPreguntas.preguntas.filter(p => p.id !== idPregunta);
          this.buscarPreguntas();  // Refrescar la lista de preguntas filtradas si es necesario
        },
        error: (error) => {
          console.error('Error al eliminar la pregunta', error);
        }
      });
    }
  }

  cargarPreguntasDisponibles() {
    this.preguntaService.getPreguntas().subscribe(preguntas => {
      this.preguntasDisponibles = preguntas;
      this.buscarPreguntas();
    });
  }

  buscarPreguntas() {
    let preguntasEnQuiz = new Set(this.infoQuizPreguntas.preguntas.map(p => p.id));  // Asumiendo que cada pregunta en infoQuizPreguntas tiene un 'id'
    console.log(preguntasEnQuiz);
    if (!this.searchTerm) {
      this.preguntasFiltradas = this.preguntasDisponibles.filter(p => !preguntasEnQuiz.has(p.id));
    } else {
      this.preguntasFiltradas = this.preguntasDisponibles.filter(p =>
        p.texto.toLowerCase().includes(this.searchTerm.toLowerCase()) && !preguntasEnQuiz.has(p.id)
      );
    }
  }

}
