import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataSubmit } from '../shared/model/answer.model';
import { QuizData } from '../shared/model/entry-code.model';

@Injectable({
  providedIn: 'root',
})
export class ConnectApiService {
  private readonly BASE_URL = 'http://localhost:3000/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  quizStart(code: string) {
    return this.http.post<QuizData>(
      this.BASE_URL + 'api/quiz/start',
      code,
      this.httpOptions
    );
  }

  quizEnd(data: any) {
    return this.http.post<any>(
      this.BASE_URL + 'api/quiz/end',
      data,
      this.httpOptions
    );
  }
}
