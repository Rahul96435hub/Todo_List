import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";
// import { title } from 'process';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string | null | undefined;
  todos:Todo[] | undefined;
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos = [];
    }
    else{
      this.todos=JSON.parse(this.localItem)
    }
      
    
    
      
      // {
      //   sno:1,
      //   title:"this is title1",
      //   desc:"Description",
      //   active:true
      // },
      // {
      //   sno:2,
      //   title:"this is title2",
      //   desc:"Description",
      //   active:true
      // },
      // {
      //   sno:3,
      //   title:"this is title3",
      //   desc:"Description",
      //   active:true
      // }
    
   }

  ngOnInit(): void {
  }
deleteTodo(todo:Todo){
  console.log(todo)
  const index = this.todos?.indexOf(todo);
  this.todos?.splice(index as number, 1)
  localStorage.setItem("todos", JSON.stringify(this.todos));
}
 addTodo(todo:Todo){
  console.log(todo)
  this.todos?.push(todo);
  localStorage.setItem("todos", JSON.stringify(this.todos));
}
ToggleTodo(todo:Todo){
  const index = this.todos?.indexOf(todo);
  this.todos![index as number].active  = !this.todos?.[index as number].active;
  localStorage.setItem("todos", JSON.stringify(this.todos));
}

  
}
