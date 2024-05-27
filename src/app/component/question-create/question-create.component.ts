import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Opcion } from '../../models/Opcion';
import { Pregunta } from '../../models/Pregunta';
import { PreguntaService } from '../../services/pregunta.service';

@Component({
  selector: 'app-question-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './question-create.component.html',
  styleUrl: './question-create.component.css'
})
export class QuestionCreateComponent {
  opciones:Opcion []= [];
  pregunta: Pregunta = {id:0, texto:'', opciones:this.opciones, esPublica:true};

  constructor(private preguntaService:PreguntaService) { }

  addOption(): void {
    this.opciones.push({ texto: '', esCorrecta: false });
  }

  removeOption(index: number): void {
    this.opciones.splice(index, 1);
  }

  saveQuestion(): void {
    this.pregunta.opciones = this.opciones;
    console.log(this.pregunta);
    this.preguntaService.createQuiz(this.pregunta).subscribe({
      next: (pregunta) => {
        console.log('Pregunta creada', pregunta);
      },
      error: (error) => console.error('Error al crear pregunta', error)
    });
  }

}
