import {Injectable} from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class SignedInAuthGuard implements CanActivate {

  constructor(private service: AuthService, private router: Router) {
  }

  canActivate(): boolean {
    if (this.service.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
