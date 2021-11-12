import { Todo } from './../../todo.interface';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
})
export class NewTodoComponent implements OnInit {
  todoForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    finished: new FormControl(false),
  });

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  addTodo() {
    //TODO
    const newTodo: Todo = this.todoForm.value;

    this.todoService.saveTodo(newTodo).subscribe();
  }
}
