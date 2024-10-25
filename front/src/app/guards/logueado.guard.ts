import { CanActivateFn, Router } from '@angular/router';
import { ApiRestService } from '../services/api-rest.service';
import { inject } from '@angular/core';

export const logueadoGuard: CanActivateFn = (route, state) => {
  const apiService : ApiRestService = inject(ApiRestService);
  const router : Router = inject(Router)
  if (apiService.isThereAUser()){
    return true;
  } else {
    router.navigate(['auth/login']);
    return false;  // se cambia para dejar entrar al loqueado o no, en true deja ver obvio
  }
};

