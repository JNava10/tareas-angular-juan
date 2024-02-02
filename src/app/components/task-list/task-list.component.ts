import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task/task.service";
import {Task, TaskList} from "../../interfaces/task";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  constructor(private taskService: TaskService) { }

  taskList: TaskList | undefined;

  ngOnInit() {
    this.taskService.getAllTasks().subscribe({
      next: (taskList: TaskList) => {
        this.taskList = taskList;
      }
    });
  }
}
