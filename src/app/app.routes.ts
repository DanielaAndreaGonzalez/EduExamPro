import { Routes } from '@angular/router';
import { QuizCreateComponent } from './component/quiz-create/quiz-create.component';
import { QuestionCreateComponent } from './component/question-create/question-create.component';
import { ExamComponent } from './component/exam/exam.component';
import { EditQuizComponent } from './component/edit-quiz/edit-quiz.component';

export const routes: Routes = [
  { path: '', component: QuizCreateComponent},
  { path: 'crear-quiz', component: QuizCreateComponent },
  { path: 'edit-quiz/:id', component: EditQuizComponent },
  { path: 'crear-pregunta', component: QuestionCreateComponent },
  { path: 'tomar-examen', component: ExamComponent },
];
