import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const user = JSON.parse(localStorage.getItem('user') || 'null');

  // ❌ غير مسجل
  if (!user) {
    router.navigate(['/login'], {
      queryParams: { returnUrl: state.url }
    });
    return false;
  }

  // 👑 حماية صفحات admin
  if (route.routeConfig?.path?.includes('admin')) {
    if (user.role !== 'admin') {
      router.navigate(['/home']);
      return false;
    }
  }

  return true;
};