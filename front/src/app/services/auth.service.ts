import { inject, Injectable } from '@angular/core';
import { ApiRestService } from './api-rest.service';

export interface userData {
  "token": string,
  "usuario": {
    "id_usuario": number,
    "username": string,
    "email": string,
    "is_admin": boolean
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiService = inject(ApiRestService);

  public async login(username: string, password: string){
    const response = await this.apiService.post<userData>('auth/', username + password); 

    //localStorage.setItem('usuario':response);

    return response

  }

}
