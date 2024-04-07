import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-form.component.html',
  styleUrl: './quiz-form.component.css'
})
export class QuizFormComponent {
  @Input() categories: string[] = [];
}
