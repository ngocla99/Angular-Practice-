/* tslint:disable:no-unused-variable */
import {
  fakeAsync,
  tick,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TodosComponent],
      imports: [HttpClientModule],
      providers: [TodoService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  // it('should load todos from the server', async () => {
  //   let service = TestBed.get(TodoService);
  //   spyOn(service, 'getTodosPromise').and.returnValue(
  //     Promise.resolve([1, 2, 3])
  //   );

  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     expect(component.todos.length).toBe(3);
  //   });
  // });
  it('should load todos from the server', fakeAsync(() => {
    let service = TestBed.get(TodoService);
    spyOn(service, 'getTodosPromise').and.returnValue(
      Promise.resolve([1, 2, 3])
    );

    fixture.detectChanges();
    tick();
    expect(component.todos.length).toBe(3);
  }));
});
