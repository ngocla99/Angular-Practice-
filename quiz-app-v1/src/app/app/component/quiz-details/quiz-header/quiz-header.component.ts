import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-quiz-header',
  templateUrl: './quiz-header.component.html',
  styleUrls: ['./quiz-header.component.css'],
})
export class QuizHeaderComponent implements OnInit, OnDestroy {
  startQuiz$!: Subscription;
  duration!: number;
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.startQuiz$ = this.storeService.quizStartEvent.subscribe((data) => {
      this.duration = data.duration;
    });
  }

  ngOnDestroy(): void {
    this.startQuiz$.unsubscribe();
  }
}
