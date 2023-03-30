import { Injectable } from '@angular/core';
import {CanLoad, Router} from "@angular/router";
import {SessionService} from "./session.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanLoad {
  private readonly TOKEN_KEY = 'token';

  constructor(private router: Router, private service: SessionService) {
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  canLoad():boolean {
    return this.isAuthenticated();
  }

  logout() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (token) {
      this.service.deleteSession$(token).subscribe(
        () => {
        }
      )
      localStorage.removeItem(this.TOKEN_KEY);
      this.router.navigate(['/login'])
    }
  }
}
