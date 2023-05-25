import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Car} from "../models/car.model";
import {CarService} from "../services/car.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {WebsocketService} from "../services/websocket.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent implements OnInit, OnDestroy {
  car: Car | undefined;

  private subscriptions: Subscription[] = [];

  constructor(private service: CarService, private _route: ActivatedRoute, private router: Router, public auth: AuthService, private webSocketService: WebsocketService, public snackBar: MatSnackBar,) {
  }

  ngOnInit() {
    const id = this._route.snapshot.params['id'];
    this.subscriptions.push(this.service.getCar$(id).subscribe((sub) => {
      this.car = sub;
    }))
    this.subscriptions.push(this.webSocketService.listenToEvent('carUpdated').subscribe((updatedCar: any) => {
      this.validateWebsocketCarUpdated(updatedCar);
    }));

    this.subscriptions.push(this.webSocketService.listenToEvent('carDeleted').subscribe((deletedCar: any) => {
      this.validateWebsocketCarDeleted(deletedCar);
    }));
  }

  validateWebsocketCarUpdated(updatedCar: any) {
    if (this.car?.id === updatedCar.id) {
      this.car = updatedCar.car;
    }
  }

  validateWebsocketCarDeleted(deletedCar: any) {
    if (this.car?.id === deletedCar.id) {
      this.snackBar.open(`${this.car?.make} ${this.car?.model} ${this.car?.year} kuulutus on eemaldatud!`, '', {
        duration: 3000,
        horizontalPosition: "end",
        verticalPosition: "top"
      });
      this.redirectToHome()
    }
  }

  redirectToHome() {
    this.router.navigate(['']);
  }

  redirectToEdit(id: number) {
    this.router.navigate(['car', id, 'edit']);
  }

  Euro = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'Eur',
  });

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
