import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-quiz-input',
  templateUrl: './quiz-input.component.html',
  styleUrls: ['./quiz-input.component.css'],
})
export class QuizInputComponent implements OnInit {
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('⚠️Please enter code!');
    } else {
      const code = form.value;
      this.storeService.startQuiz(code);
    }
  }
}
