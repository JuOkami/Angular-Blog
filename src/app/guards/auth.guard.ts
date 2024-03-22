import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const authservice: AuthService = inject(AuthService);

  if (!authservice.isAuthenticated()) {
    router.navigate(['login'], {
      queryParams: { message: 'Vous devez vous connecter' },
    });
    return false;
  }
  return true;
};
