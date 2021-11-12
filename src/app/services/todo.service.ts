import { Todo } from './../todo.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly apiUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(`${this.apiUrl}/todos`, httpOptions)
      .pipe(tap(console.log), catchError(this.handleError));
  }

  saveTodo(newTodo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.apiUrl}/todos`, newTodo, httpOptions);
  }

  deleteTodo(deleteTodo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(
      `${this.apiUrl}/todos/${deleteTodo.id}`,
      httpOptions
    );
  }

  toggle(patchedTodo: Todo): Observable<Todo> {
    return this.http.put<Todo>(
      `${this.apiUrl}/todos/${patchedTodo.id}`,
      patchedTodo,
      httpOptions
    );
  }

  handleError(handleError: any): Observable<never> {
    return throwError('Not yet implemented');
  }
}
