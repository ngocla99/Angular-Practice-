import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizInputComponent } from './component/quiz-input/quiz-input.component';
import { QuizOverviewComponent } from './component/quiz-overview/quiz-overview.component';
import { QuizDetailsComponent } from './component/quiz-details/quiz-details.component';
import { QuizResultComponent } from './component/quiz-result/quiz-result.component';
import { QuizHeaderComponent } from './component/quiz-header/quiz-header.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuizInputComponent,
    QuizOverviewComponent,
    QuizDetailsComponent,
    QuizResultComponent,
    QuizHeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
