import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DataSubmit } from '../shared/model/answer.model';
import { QuizData } from '../shared/model/entry-code.model';
import { Question } from '../shared/model/question.model';
import { ConnectApiService } from './connect-api.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  quizStartEvent = new BehaviorSubject<QuizData>({
    account: { name: '', clazz: '' },
    duration: 0,
    passScore: 0,
    questions: [],
    testName: '',
  });
  quizEndEvent = new BehaviorSubject<any>({
    account: {
      name: '',
      clazz: '',
    },
    totalScore: 0,
    score: 0,
    status: false,
  });
  private quizData!: QuizData;
  private numberQuiz: number = 0;
  private questions: Question[] = [];
  constructor(
    private connectApiService: ConnectApiService,
    private router: Router
  ) {}

  getQuizData() {
    return { ...this.quizData };
  }

  getNumberQuiz() {
    return this.numberQuiz;
  }

  getQuestions() {
    return [...this.questions];
  }

  startQuiz(code: string) {
    this.connectApiService.quizStart(code).subscribe(
      (data) => {
        this.quizData = data;
        this.numberQuiz = data.questions.length;
        this.questions = data.questions;
        this.router.navigateByUrl('/quiz-overview');
        this.quizStartEvent.next(data);
      },
      (error) => {
        console.log(error.error.message);
      }
    );
  }
}
