import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // Base URL for API calls
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  // Query parameter for GETting todos from the server
  todosLimit: string = '?_limit=5';

  constructor(private http:HttpClient) { }

  // GET the todos from the API
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // PUT to update object property on the server
  toggleCompleted(todo: Todo):Observable<any> {
    // PUT url is "baseUrl/todoItemId"
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  // DELETE todo from server
  deleteTodo(todo: Todo): Observable<Todo> {
    // DELETE url is "baseUrl/todoItemId"
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  addTodo(todo: Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

}
