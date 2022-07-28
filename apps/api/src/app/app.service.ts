import { Todo } from '@lapis/data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  todos: Todo[] = [
    { title: 'Todo 1' },
    { title: 'Todo 2' },
  ];

  getData(): Todo[] {
    return this.todos;
  }

  addTodo(): void {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    });
  }
}
