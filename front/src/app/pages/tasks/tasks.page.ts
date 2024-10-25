import { Component, inject, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Task } from '../../interfaces/task';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tasks.page.html',
  styleUrl: './tasks.page.css'
})
export class TasksPage implements OnInit{
  private httpClient : HttpClient = inject(HttpClient);
  taskList : Task[] = [];
  ngOnInit(): void {
    const tasks = this.httpClient.get<Task[]>('http://localhost/back/tareas')
  }

}
