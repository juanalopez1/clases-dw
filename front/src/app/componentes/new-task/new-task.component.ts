import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskFormComponent } from "../task-form/task-form.component";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, TaskFormComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

}
