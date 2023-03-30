import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SessionService} from "../../services/session.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TokenResponse} from "../../models/reponse.model";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  formFields = {
    email: ['', Validators.required],
    password: ['', Validators.required]
  }

  loginForm: FormGroup | undefined;
  loading = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: SessionService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group(this.formFields);
  }

  onSubmit() {
    console.log("login sisse");
    if (this.loginForm?.valid) {
      this.loginForm?.disable();
      this.loading = true;
      this.service.session$(this.loginForm?.value).subscribe(
        (res: TokenResponse) => {
          if (res) {
            this.loading = false;
            localStorage.setItem('token', res.uuid);
            this.router.navigate(['']);
          }
        },
        error => {
          console.log(error);
          this.loading = false;
          this.loginForm?.enable();
          this.snackBar.open('Viga sisenemisel: ' + JSON.stringify(error.error.errorMessage), '', { duration: 10000, horizontalPosition:"end", verticalPosition: "top"  });

        }
      )
    }
  }

  redirectToRegister(): void {
    this.router.navigate(['register']);
  }
}
