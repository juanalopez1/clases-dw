import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-id',
  standalone: true,
  imports: [],
  templateUrl: './task-id.page.html',
  styleUrl: './task-id.page.css',
})
export class TaskIdPage {
  id_tarea = input<string>();

  ngOnInit(): void {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',this.id_tarea())
  }

}
