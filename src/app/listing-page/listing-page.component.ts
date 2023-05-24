import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Car} from "../models/car.model";
import {CarService} from "../services/car.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {WebsocketService} from "../services/websocket.service";

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent implements OnInit, OnDestroy {
  car: Car | undefined;

  private subscriptions: Subscription[] = [];

  constructor(private service: CarService, private _route: ActivatedRoute, private router: Router, public auth: AuthService, private webSocketService: WebsocketService) {
  }

  ngOnInit() {
    const id = this._route.snapshot.params['id'];
    this.subscriptions.push(this.service.getCar$(id).subscribe((sub) => {
      this.car = sub;
    }))

    this.subscriptions.push(this.webSocketService.listenToEvent('car/' + id).subscribe((car: any) => {
      this.car = car;
    }));
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
