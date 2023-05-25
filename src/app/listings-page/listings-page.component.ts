import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PageEvent} from "@angular/material/paginator";
import {CarService} from "../services/car.service";
import {Car} from "../models/car.model";
import {Router} from "@angular/router";
import {WebsocketService} from "../services/websocket.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit, OnDestroy {
  cars: Car[] = [];
  totalCars: number = 0;
  pageIndex: number = 0;
  pageSize: number = 16;

  private subscriptions: Subscription[] = [];

  constructor(private http: HttpClient, private service: CarService, private router: Router, private webSocketService: WebsocketService) {
    this.getCars(this.pageIndex, this.pageSize);
  }

  ngOnInit() {
    this.subscriptions.push(this.webSocketService.listenToEvent('carCreated').subscribe((cars: Car[]) => {
      this.validateWebsocketCarCreated(cars);
    }));

    this.subscriptions.push(this.webSocketService.listenToEvent('carUpdated').subscribe((updatedCar: any) => {
      this.validateWebsocketCarUpdated(updatedCar);
    }));

    this.subscriptions.push(this.webSocketService.listenToEvent('carDeleted').subscribe((deletedCar: any) => {
      this.validateWebsocketCarDeleted(deletedCar);
    }));
  }

  validateWebsocketCarCreated(cars: Car[]) {
    this.totalCars++;
    if (this.pageSize > this.totalCars || ((this.pageIndex + 1) * this.pageSize) >= this.totalCars) {
      this.cars = cars.slice(this.pageSize * this.pageIndex, this.pageSize * this.pageIndex + this.pageSize)
    }
  }

  validateWebsocketCarUpdated(updatedCar: any) {
    let index = this.cars.findIndex(car => car.id === updatedCar.id);
    if (index !== -1) {
      this.cars[index] = updatedCar.car;
    }
  }

  validateWebsocketCarDeleted(deletedCar: any) {
    this.totalCars--;
    let index = this.cars.findIndex(car => car.id === deletedCar.id);
    if (index !== -1) {
      this.cars = this.cars.filter(function (car) {
        return car.id !== deletedCar.id;
      });
    }
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

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
