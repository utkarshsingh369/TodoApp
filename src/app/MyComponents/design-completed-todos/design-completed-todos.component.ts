import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from 'src/app/TodoItem';

@Component({
  selector: 'app-design-completed-todos',
  templateUrl: './design-completed-todos.component.html',
  styleUrls: ['./design-completed-todos.component.css']
})
export class DesignCompletedTodosComponent {
  @Input() todo!:TodoItem;
  @Output() deletingTodo:EventEmitter<TodoItem>=new EventEmitter();
  
  onDeleteTodo(){
    this.deletingTodo.emit(this.todo);
  }
}
