import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './question-create.component.html',
  styleUrl: './question-create.component.css'
})
export class QuestionCreateComponent {
  question = '';
  options = [
    { text: '', isCorrect: false },
    { text: '', isCorrect: false }
  ];

  addOption(): void {
    this.options.push({ text: '', isCorrect: false });
  }

  removeOption(index: number): void {
    this.options.splice(index, 1);
  }

  saveQuestion(): void {
    // Aquí enviarías la pregunta y las opciones al backend o a un servicio para ser guardadas
    console.log('Pregunta guardada', { question: this.question, options: this.options });
  }

}
