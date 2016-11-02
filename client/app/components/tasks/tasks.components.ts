import { Component } from '@angular/core';
import { TaskService } from '../../services/task.services';
import { Task } from '../../../Task';

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: 'tasks.components.html'
})

export class TasksComponent {
  tasks: Task[];
  title: string;

  constructor(private taskService:TaskService){
    this.taskService.getTasks()
     .subscribe(tasks => {
      this.tasks = tasks;
     });
  }

  addTask(event){
    event.preventDefault();
    var newTask = {
      title : this.title,
      isDone:false
      }

      this.taskService.addTask(newTask)
        .subscribe(task => {
        this.tasks.push(task);
        this.title = '';
      });
  }

  deleteTask(id){
    var tasks = this.tasks;

    this.taskService.deleteTask(id)
      .subscribe( data => {
        if(data.n == 1){
          for (var i=0; i < tasks.length; i ++){
            if (tasks[i]._id == id){
              task.splice(i, 1);
            }
          }
        }
      });
  }
}