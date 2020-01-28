import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve) => {
      const token = localStorage.getItem('token');

      if (token) {
        resolve(true);
      } else {
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        resolve(false);
      }
    });
  }

  logout() {
    localStorage.clear();
    window.location.href = '';
  }
}
