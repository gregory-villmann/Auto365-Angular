import {Injectable} from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class SignedOutAuthGuard implements CanActivate {

  constructor(private service: AuthService, private router: Router) {
  }

  canActivate(): boolean {
    if (this.service.isAuthenticated()) {
      this.router.navigate(['']);
      return false;
    } else {
      return true;
    }
  }
}
