import { TodoListComponent } from './components/todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTodoComponent } from './components/new-todo/new-todo.component';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  {
    path: 'new-todo',
    component: NewTodoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
