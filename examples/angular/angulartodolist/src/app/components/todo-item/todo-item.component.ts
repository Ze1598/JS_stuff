import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { TodoService } from '../../services/todo.service';

import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  setClasses() {
    // The `todo` class is always added to the HTML element, but\
    // `is-completed` is only added if the `completed` attribute of the `todo`\
    // is set to `true`
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    };

    return classes;
  }

  onToggle(todo) {
    // Toggle CSS class
    todo.completed = !todo.completed;
    // Toggle object property value on the server
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    });
  }
  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

}
