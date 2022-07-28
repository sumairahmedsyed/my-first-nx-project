import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Todo } from '@lapis/data';

@Component({
  selector: 'lapis-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  todos: Todo[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch(): void {
    this.http.get<Todo[]>('/api/todos').subscribe(todos => this.todos = todos);
  }

  addTodo(): void {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }
}
