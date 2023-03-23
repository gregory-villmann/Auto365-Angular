import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RegistrationService} from "../../services/registration.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  formFields = {
    email: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    password: ['', Validators.required]
  };

  registrationForm: FormGroup | undefined;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: RegistrationService,
    public snackBar: MatSnackBar
  ) {}


  ngOnInit() {
    this.registrationForm = this.fb.group(this.formFields);
  }

  onSubmit() {
    if (this.registrationForm?.valid) {
      this.registrationForm?.disable();
      this.loading = true;
      this.service.register$(this.registrationForm.value).subscribe(
        (res) => {
          this.snackBar.open(res.response, '', { duration: 3000, horizontalPosition:"end", verticalPosition: "top" });
          this.loading = false;
          this.redirectToLogin()
        },
        (error) => {
          this.loading = false;
          this.registrationForm?.enable();
          this.snackBar.open(error.error.errorMessage, '', { duration: 10000, horizontalPosition:"end", verticalPosition: "top" });
        }
      )
    }
  }

  redirectToLogin() {
    this.router.navigate(['/login'])
  }
}
