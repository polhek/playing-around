import {
  Component,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
  EventEmitter,
} from '@angular/core';
import { Todo } from 'src/app/todo.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo?: Todo;
  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() onToggleTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(todo: Todo): void {
    this.onDeleteTodo.emit(todo);
  }

  onToggle(todo: Todo): void {
    this.onToggleTodo.emit(todo);
  }
}
