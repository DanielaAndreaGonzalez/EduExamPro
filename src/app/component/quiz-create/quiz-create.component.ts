import { Component } from '@angular/core';
import { QuizFormComponent } from '../quiz-form/quiz-form.component';
import { FormsModule } from '@angular/forms';
import { QuestionCreateComponent } from '../question-create/question-create.component';

@Component({
  selector: 'app-quiz-create',
  standalone: true,
  imports: [QuizFormComponent,QuestionCreateComponent,FormsModule],
  templateUrl: './quiz-create.component.html',
  styleUrl: './quiz-create.component.css'
})
export class QuizCreateComponent {
  categories = ['Business', 'Computers & Tech', 'Education & Exams', 'Fun Quizzes', 'Miscellaneous', 'Personality Quizzes', 'Trivia'];
}
