import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { QuizCreateComponent } from './component/quiz-create/quiz-create.component';
import { ExamComponent } from './component/exam/exam.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuizCreateComponent,RouterModule, ExamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EduExamPro';
}
