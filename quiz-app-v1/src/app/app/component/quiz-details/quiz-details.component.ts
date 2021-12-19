import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectApiService } from 'src/app/service/connect-api.service';
import { StoreService } from 'src/app/service/store.service';
import { QuizData } from 'src/app/shared/model/entry-code.model';
import { Question } from 'src/app/shared/model/question.model';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.css'],
})
export class QuizDetailsComponent implements OnInit {
  quizData!: QuizData;
  currentQuiz = 0;
  numberQuiz!: number;
  questions: Question[] = [];

  currentMulti = false;
  userAnswers: any;
  @ViewChild('f', { static: true }) f!: NgForm;
  answers: any = {};
  constructor(
    private storeService: StoreService,
    private connectApiService: ConnectApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.storeService.quizStartEvent.subscribe(() => {
      this.quizData = this.storeService.getQuizData();
      this.questions = this.storeService.getQuestions();
      this.numberQuiz = this.questions.length;

      this.userAnswers = this.questions.map((question) => {
        let item = {
          _id: question._id,
          correct: [],
        };
        return item;
      });
    });
  }

  onGetQuestion(go: string) {
    if (go === 'prev') {
      this.currentQuiz--;
    }
    if (go === 'next') {
      this.currentQuiz++;
    }
  }

  onSubmit() {
    let body = {
      code: 'fafafa',
      userAnswers: this.userAnswers,
    };

    console.log(this.answers);
    console.log(this.userAnswers);

    this.connectApiService.quizEnd(body).subscribe((data) => {
      console.log(data);
      this.storeService.quizEndEvent.next(data);
      this.router.navigate(['/quiz-result']);
    });
  }
}
