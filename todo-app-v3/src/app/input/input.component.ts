import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  inputValue: string = '';
  @Output() newTaskEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  addNewTask(): void {
    this.newTaskEvent.emit(this.inputValue);
    this.inputValue = '';
  }
}
