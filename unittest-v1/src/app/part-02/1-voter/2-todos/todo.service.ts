import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {}

  add(todo: any) {
    return this.http.post('...', todo);
  }

  getTodos(): Observable<any[]> {
    return this.http.get<any[]>('...');
  }

  getTodosPromise(): Promise<any[]> {
    return this.getTodos().toPromise();
  }

  delete(id: any) {
    return this.http.delete('...');
  }
}
