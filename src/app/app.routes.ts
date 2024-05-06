import { Routes } from '@angular/router';
import { QuizCreateComponent } from './component/quiz-create/quiz-create.component';
import { QuestionCreateComponent } from './component/question-create/question-create.component';
import { ExamComponent } from './component/exam/exam.component';

export const routes: Routes = [
  { path: '', redirectTo: '/crear-quiz', pathMatch: 'full' },
  { path: 'crear-quiz', component: QuizCreateComponent },
  { path: 'crear-pregunta', component: QuestionCreateComponent },
  { path: 'tomar-examen', component: ExamComponent },
];
