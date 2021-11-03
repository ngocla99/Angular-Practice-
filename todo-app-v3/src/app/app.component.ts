import { Component } from '@angular/core';
import { Todos } from './todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos!: Todos[];

  title = 'todo-app-v2';

  constructor() {
    this.todos = [];
  }

  addTask(task: string) {
    if (task.trim()) {
      this.todos.push({
        content: task,
        completed: false,
      });
    }
  }

  onToggleTodo(id: number) {
    this.todos.forEach((todo, index) => {
      if (id === index) todo.completed = !todo.completed;
    });
  }

  onDeleteTodo(id: number) {
    this.todos = this.todos.filter((_, index) => id !== index);
  }
}
