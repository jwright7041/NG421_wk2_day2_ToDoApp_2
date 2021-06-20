import { Component,OnInit } from '@angular/core';
import { ITodo } from './interfaces/itodo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Todos';
  todoList: ITodo[] = [];
  todoTitle: string;
  todoId: number = 0;

  constructor(private todoService: TodoService){
    
  }
  ngOnInit() {
    this.todoTitle = '';
    this.todoList = this.todoService.getTodos();
  }
  


}
