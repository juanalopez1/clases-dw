import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiRestService } from '../../../services/api-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css',
})

export class LoginPage {
  username: string = '';
  password: string = '';

  private apiService: ApiRestService = inject(ApiRestService);
  private router : Router = inject(Router);

  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(''),
  });

  
  async onSubmit() {
    console.log('jghfvjvhgbjhgbkbk  ');
    console.log(this.password);
    console.warn(this.profileForm.value);

    const response = await this.apiService.post(
      'auth/',
      JSON.stringify({ username: this.username, contraseña: this.password }),
    );
    console.log(response);

    this.apiService.setToken(response.token);
    await this.router.navigate(['/home'])
  }
}
