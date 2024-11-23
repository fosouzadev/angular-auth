import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const privatePagesGuard: CanActivateFn = (route, state) => {
  const auth = localStorage.getItem('auth');
  const authorized: boolean = auth !== null && auth === "fos;12345678";

  if (authorized == false)
    return inject(Router).navigate(['/']);

  return authorized;
};
