import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Auto365';
  constructor(private router: Router, public auth: AuthService) {
  }

  redirectHome() {
    this.router.navigate(['']);
  }

  routeToAddPage() {
    this.router.navigate(['add-car']);
  }

  routeToLogin() {
    this.router.navigate(['login']);
  }

  getUserName(): string {
    let name = localStorage.getItem('name');
    if (name) {
      return name;
    } else {
      return 'Guest';
    }
  }
}
