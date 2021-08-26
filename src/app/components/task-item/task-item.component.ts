import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {Task} from '../../Task';
// import {TASKS} from '../../mock-tasks';
// import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task;
  @Output() onDeleteTask:EventEmitter<Task>=new EventEmitter()
  @Output() onToggleReminder:EventEmitter<Task>=new EventEmitter()
  constructor(){
    this.task={
      id:0,
      text:'',
      day:'',
      reminder:true || false,
      };
  }

  ngOnInit(): void {
    
  }

  onDelete(task:{}){
    this.onDeleteTask.emit(this.task)
  }
  
  onToggle(task:Task){
    this.onToggleReminder.emit(task)
  }

}
