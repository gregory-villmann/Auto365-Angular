import { Injectable } from '@angular/core';
import {CanLoad, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanLoad {
  private readonly TOKEN_KEY = 'token';
  constructor(private router: Router) {
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  canLoad():boolean {
    if (this.isAuthenticated()) {
      return true;
    } else {
      //this.router.navigate(['']);
      return false;
    }
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
