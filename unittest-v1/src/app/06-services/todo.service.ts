import { HttpClient } from '@angular/common/http';

export class TodoService {
  url = '...';

  constructor(private http: HttpClient) {}

  add(todo: any) {
    return this.http.post(this.url, todo);
  }

  getTodos() {
    return this.http.get<any>(this.url);
  }

  delete(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
