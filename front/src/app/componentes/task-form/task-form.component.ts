import { JsonPipe } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TakenDirective } from '../../directives/taken.directive';
import { ApiRestService } from '../../services/api-rest.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, JsonPipe, TakenDirective],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  nombre: string = '';
  duracion: number = 10;

  //public save= output<>() para el emit!!

  async onSubmit(form: NgForm) {
    if (form.valid) {
      console.info(this.nombre + ' nombre');
      console.info(this.duracion + ' duracion');

      const apiService = inject(ApiRestService);

      let userId = localStorage.getItem('userData') //esta mal
      const createdTask = apiService.post(`usuarios/${userId}/tareas`, this.nombre + this.duracion)
      return createdTask
    } else {
      console.error('Tarea invalida')
    }
  }
}
