import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Car, CarsResponse} from "../models/car.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PrismaService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getCars$(pageIndex: number, pageSize:number): Observable<CarsResponse>{
    return this.http.get<CarsResponse>(`${this.baseUrl}/cars?pageIndex=${pageIndex}&pageSize=${pageSize}`);
  }

  getCar$(id: number): Observable<Car>{
    return this.http.get<Car>(`${this.baseUrl}/cars/${id}`);
  }
}
