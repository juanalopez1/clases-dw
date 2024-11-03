import { Component, inject, input, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Task } from '../../interfaces/task';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, RouterLink],
  templateUrl: './tasks.page.html',
  styleUrl: './tasks.page.css'
})
export class TasksPage implements OnInit{
  private httpClient : HttpClient = inject(HttpClient);
  tasksList = signal<Task[]>([]);
  async ngOnInit(): Promise<void> {
    const tasks = await firstValueFrom(this.httpClient.get<Task[]>('http://localhost/back/tareas'));
    this.tasksList.set(tasks);
  }

}
