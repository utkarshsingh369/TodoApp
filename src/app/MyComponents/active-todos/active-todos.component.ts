import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from 'src/app/TodoItem';

@Component({
  selector: 'app-active-todos',
  templateUrl: './active-todos.component.html',
  styleUrls: ['./active-todos.component.css']
})
export class ActiveTodosComponent implements OnInit {
  
  activeTodoArray:TodoItem[]=[];
  @Input() todoArray!:TodoItem[]; 
  @Output() completingTodo:EventEmitter<TodoItem>=new EventEmitter();
  ngOnInit(): void {
    for (let i = 0; i < this.todoArray.length; i++) {
      if(!this.todoArray[i].completed)
        this.activeTodoArray.push(this.todoArray[i]);
    }
  }
  onMarkCompleted(todo:TodoItem){
    this.activeTodoArray.splice(this.activeTodoArray.indexOf(todo),1);
    this.completingTodo.emit(todo);
  }
}
