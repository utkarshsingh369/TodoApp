import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from 'src/app/TodoItem';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.css']
})
export class AllTodosComponent {
  @Input() todoArray?:TodoItem[]=[];
  newTitle:string="";
  newDesc:string="";
  @Output() addedTodo:EventEmitter<TodoItem>=new EventEmitter();
  @Output() completingTodo:EventEmitter<TodoItem>=new EventEmitter();
  @Output() deletingTodo:EventEmitter<TodoItem> = new EventEmitter();
  onAddTodo(){
    // console.log(this.newTitle,"< and >",this.newDesc,"added");
    this.addedTodo.emit(new TodoItem(this.newTitle,this.newDesc));
  }
  onMarkCompleted(todo:TodoItem){
    this.completingTodo.emit(todo);
  }
  onDeleteTodo(todo:TodoItem){
    this.deletingTodo.emit(todo);
  }
}
