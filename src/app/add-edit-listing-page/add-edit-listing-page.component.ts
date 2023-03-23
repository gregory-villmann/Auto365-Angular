import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PrismaService} from "../services/prisma.service";
import { AddEditState } from "../models/car.model";

@Component({
  selector: 'app-add-edit-listing-page',
  templateUrl: './add-edit-listing-page.component.html',
  styleUrls: ['./add-edit-listing-page.component.css']
})
export class AddEditListingPageComponent implements OnInit {
  formFields = {
    make: ['', Validators.required],
    model: ['', Validators.required],
    year: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]],
    mileage: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]],
    price: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]],
    image: ['', Validators.required],
  };

  carForm: FormGroup | undefined;

  state: any;
  existingCarId: number | undefined;

  AddEditState: typeof AddEditState = AddEditState;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private _route: ActivatedRoute,
    private service: PrismaService,
    public snackBar: MatSnackBar,
  ) {}


  ngOnInit(): void {
    this.carForm = this.fb.group(this.formFields);
    this.state = this.AddEditState.ADD;
  }

  onSubmit() {
    if (this.carForm?.valid) {
      if (this.state === this.AddEditState.ADD) {
        this.service.postCar$(this.carForm.value).subscribe(
          (res) => {
            this.snackBar.open('Auto salvestatud', '', { duration: 3000, horizontalPosition:"end", verticalPosition: "top" });
            this.router.navigate(['car', res['id']])
          },
          error => {
            this.snackBar.open('Error auto salvestamisel: ' + JSON.stringify(error.error.error), '', { duration: 3000, horizontalPosition:"end", verticalPosition: "top"  });
          }
        )
      }
    }
  }

  deleteCar() {
    console.log("DELETING CAR"); // TODO car deleting
  }

  redirectToHome() {
    this.router.navigate(['cars']);
  }
}
