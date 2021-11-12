import { UiserviceService } from './../../services/uiservice.service';
import { Observable, Subscription } from 'rxjs';
import { Todo } from './../../todo.interface';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  toggleShow?: Observable<boolean>;

  constructor(
    private todoService: TodoService,
    private uiService: UiserviceService
  ) {
    this.toggleShow = this.uiService.showToggle$;
  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo).subscribe(() => {
      this.todos = this.todos.filter((t) => {
        return t.id !== todo.id;
      });
    });
  }

  toggleTodo(todo: Todo): void {
    todo.finished = !todo.finished;
    this.todoService.toggle(todo).subscribe();
  }

  show(): void {
    this.uiService.toggleShow();
  }
}
