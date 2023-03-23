import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PageEvent } from "@angular/material/paginator";
import { CarService } from "../services/car.service";
import {Car} from "../models/car.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent {
  cars: Car[] = [];
  totalCars: number = 0;
  pageIndex: number = 0;
  pageSize: number = 16;

  constructor(private http: HttpClient, private service: CarService, private router: Router) {
    this.getCars(this.pageIndex, this.pageSize);
  }

  getCars(pageIndex: number, pageSize: number) {
    this.service.getCars$(pageIndex, pageSize).subscribe(res => {
      this.cars = res.cars;
      this.totalCars = res.size;
      this.scrollToTop();
    })
  }

  onPageChanged(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getCars(this.pageIndex, this.pageSize);
  }

  redirectToDetail(car: Car) {
    this.router.navigate(['/car', car.id]);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  Euro = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'Eur',
  });

}
