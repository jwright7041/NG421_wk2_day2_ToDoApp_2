import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { ITodo } from '../interfaces/itodo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()todo: ITodo;
  constructor(private todoService: TodoService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  async deleteTodo() {
    const modal = this.modalService.open(ConfirmationModalComponent);
    modal.componentInstance.modalInstance = modal;

    let answer = '';
    try{
    const answer = await modal.result;
    }
    catch(error){
      console.log(error);
    }

    if (answer === 'yes'){
      this.todoService.deleteTodo(this.todo);
    }
  }
}
