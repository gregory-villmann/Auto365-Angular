import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CarService} from "../services/car.service";
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
    private router: Router,
    private _route: ActivatedRoute,
    private service: CarService,
    public snackBar: MatSnackBar,
  ) {}


  ngOnInit(): void {
    this.carForm = this.fb.group(this.formFields);

    if (this._route.snapshot.routeConfig?.path === 'car/:id/edit' && this._route.snapshot.params['id'] !== null) {
      this.state = this.AddEditState.EDIT;
      this.existingCarId = this._route.snapshot.params['id'];
      this.existingCarId && this.service.getCar$(this.existingCarId).subscribe( car => {
        this.carForm?.patchValue({
          make: car.make,
          model: car.model,
          year: car.year,
          mileage: car.mileage,
          price: car.price,
          image: car.image
        })
      })
    } else {
      this.state = this.AddEditState.ADD;
    }
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
      } else if (this.state === this.AddEditState.EDIT && this.existingCarId) {
        this.service.updateCar$(this.existingCarId ,this.carForm.value).subscribe(
          (res) => {
            this.snackBar.open('Auto uuendatud', '', { duration: 3000, horizontalPosition:"end", verticalPosition: "top" });
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
    if(this.existingCarId && this.state === this.AddEditState.EDIT) {
      this.service.deleteCar$(this.existingCarId)
        .subscribe(
          (res: any) => {
            this.snackBar.open(`${res.make} ${res.model} ${res.year} on kustutatud!`, '', { duration: 3000, horizontalPosition:"end", verticalPosition: "top" });
            this.router.navigate([''])
          },
          (error) => {
            this.snackBar.open(`Error auto kustutamisel: ${error.error()}`, '', { duration: 3000, horizontalPosition:"end", verticalPosition: "top"  });
          }
        );
    }
  }

  redirectToHome() {
    this.router.navigate(['']);
  }
}
