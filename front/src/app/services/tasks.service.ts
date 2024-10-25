import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TasksService {

  constructor() { }

  async getAllTasks() {
    const result = await fetch(`http://localhost/back/tareas/`);
    const tasks = await result.json();
    return tasks
  }
}
