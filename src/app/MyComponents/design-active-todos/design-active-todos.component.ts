import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from 'src/app/TodoItem';

@Component({
  selector: 'app-design-active-todos',
  templateUrl: './design-active-todos.component.html',
  styleUrls: ['./design-active-todos.component.css']
})
export class DesignActiveTodosComponent {
  @Input() todo!:TodoItem;
  @Output() completingTodo:EventEmitter<TodoItem>=new EventEmitter();
  onMarkCompleted(){
    this.completingTodo.emit(this.todo);
  }
}
