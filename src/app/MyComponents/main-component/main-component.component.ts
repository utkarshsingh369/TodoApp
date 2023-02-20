import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { TodoItem } from 'src/app/TodoItem';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit{


  todoArray:TodoItem[]=[];
  constructor(){
  }

  ngOnInit(): void {
    this.todoArray=[{
      title:"Study Feb 17",
      desc:"Complete remaining angular topics by monday i.e., dependency injection,etc. lorem ipsum dolor dieter matix do dit randeringest racil monday i.e., dependency injection,etc. lorem ipsum dolor dieter drive sed lora magna dolodoex dep dis sit ablet lorem ipusum dex duh! ",
      completed:true,
    },
    {
      title:"Work @Amadeus",
      desc:"Study about sell connect platform lorem ipsum dolor sit amet lorem ipsum petsicia denzo datric davider den sen count lerh cedricationic tuklex daplor isacurate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iusto repudiandae deserunt qui corporis? Ipsa quia dolorem culpa iure odio adipisci saepe! Nobis aperiam debitis, nisi quas soluta cupiditate dolores!",
      completed:false,
    },
    {
      title:"Work",
      desc:"Understand Amadeus Design Factory",
      completed:false,
    },
    {
      title:"HouseHold",
      desc:"Bring Groceries, dolor sit amet lorem ipsum petsicia denzo datric dolor sit amet lorem ipsum petsicia denzo datric re-stock meds",
      completed:false,
    },
    {
      title:"Work",
      desc:"Complete all tech stacks required for netzero project by next monday",
      completed:true,
    },
    {
      title:"Study",
      desc:"Complete RxJS and SCSS on weekend",
      completed:true
    }];

    if(localStorage.getItem("todoArrayStored")){
      console.log("array is saved");
      this.todoArray=JSON.parse(String(localStorage.getItem("todoArrayStored")));
    }
  }

  allSelected:boolean=true;
  activeSelected:boolean=false;
  completedSelected:boolean=false;
  onComplete() {
    this.completedSelected=true;
    this.allSelected=false;
    this.activeSelected=false;
  }
  onActive() {
    this.activeSelected=true;
    this.allSelected=false;
    this.completedSelected=false;
  }
  onAll() {
    this.allSelected=true;
    this.activeSelected=false;
    this.completedSelected=false;
  }


  addTodo(todo:TodoItem){
    this.todoArray.unshift(todo);
    console.log("todo added");
    localStorage.setItem("todoArrayStored",JSON.stringify(this.todoArray));
  }

  onMarkCompleted(todo:TodoItem){
    console.log("The item reached",todo);
    this.todoArray[this.todoArray.indexOf(todo)].completed=true;
    console.log("The item changed",todo);
    localStorage.setItem("todoArrayStored",JSON.stringify(this.todoArray));

  }
  onDeleteTodo(todo:TodoItem){
    this.todoArray.splice(this.todoArray.indexOf(todo),1);
    console.log("deleting the todo",todo);
    localStorage.setItem("todoArrayStored",JSON.stringify(this.todoArray));
  }
}

