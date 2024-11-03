import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { Task } from '../../interfaces/task';
import { JsonPipe, NgIf } from '@angular/common';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [JsonPipe, NgIf],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnInit {
  tasksService = inject(TasksService);
  tasksList = signal<Task[]>([]);

  //private authService = inject(AuthService)
  /*public userTaskList = computed(() => {
    return this.authService.usuario()
  })*/
  async ngOnInit(): Promise<void> {
    const tasks = await this.tasksService.getAllTasks();
    this.tasksList.set(tasks);
  }
}
