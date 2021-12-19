import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizDetailsComponent } from './component/quiz-details/quiz-details.component';
import { QuizInputComponent } from './component/quiz-input/quiz-input.component';
import { QuizOverviewComponent } from './component/quiz-overview/quiz-overview.component';
import { QuizResultComponent } from './component/quiz-result/quiz-result.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/quiz-input',
    pathMatch: 'full',
  },
  {
    path: 'quiz-input',
    component: QuizInputComponent,
  },
  {
    path: 'quiz-overview',
    component: QuizOverviewComponent,
  },
  {
    path: 'quiz-details',
    component: QuizDetailsComponent,
  },
  {
    path: 'quiz-result',
    component: QuizResultComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
