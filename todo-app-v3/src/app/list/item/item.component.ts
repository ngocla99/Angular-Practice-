import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todos } from './../../todos';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() task!: Todos;
  @Input() id!: number;
  @Output() toggleTaskEvent = new EventEmitter<number>();
  @Output() deleteTaskEvent = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  toggleCompleted(item: number): void {
    this.toggleTaskEvent.emit(item);
  }

  deleteTask(item: number): void {
    this.deleteTaskEvent.emit(item);
  }
}
