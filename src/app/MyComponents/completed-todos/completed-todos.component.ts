import { Component, EventEmitter, Input,OnInit, Output } from '@angular/core';
import { TodoItem } from 'src/app/TodoItem';

@Component({
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.css']
})
export class CompletedTodosComponent implements OnInit {
  completedTodoArray:TodoItem[]=[];
  @Input() todoArray!:TodoItem[]; 
  @Output() deletingTodo:EventEmitter<TodoItem> = new EventEmitter();
  ngOnInit(): void {
    for (let i = 0; i < this.todoArray.length; i++) {
      if(this.todoArray[i].completed)
        this.completedTodoArray.push(this.todoArray[i]);
    }
  }
  onDeleteTodo(todo:TodoItem){
    this.completedTodoArray.splice(this.completedTodoArray.indexOf(todo),1);
    this.deletingTodo.emit(todo);
  }
}
