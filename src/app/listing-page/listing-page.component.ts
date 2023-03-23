import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Car} from "../models/car.model";
import {PrismaService} from "../services/prisma.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent implements OnInit {
  car$: Observable<Car> | undefined;

  constructor(private service: PrismaService, private _route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this._route.snapshot.params['id'];
    this.car$ = this.service.getCar$(id);
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
}
