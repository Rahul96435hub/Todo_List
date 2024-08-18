import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cwh-todo-list';
  constructor(){
    // setTimeout(() => {
    //   this.title="rahul suryavanshi";
    // }, 2000);
    
  }
}
