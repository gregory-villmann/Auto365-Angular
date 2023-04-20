import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car, CarForm, CarsResponse} from "../models/car.model";
import {Observable} from "rxjs";
import {getAuthHeader} from "../util/auth.util";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseUrl = 'https://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getCars$(pageIndex: number, pageSize:number): Observable<CarsResponse>{
    return this.http.get<CarsResponse>(`${this.baseUrl}/cars?pageIndex=${pageIndex}&pageSize=${pageSize}`);
  }

  getCar$(id: number): Observable<Car>{
    return this.http.get<Car>(`${this.baseUrl}/cars/${id}`);
  }

  postCar$(carForm: CarForm): Observable<Car>{
    return this.http.post<Car>(`${this.baseUrl}/cars`, carForm, getAuthHeader());
  }

  updateCar$(existingId: number, carForm: any): Observable<Car>{
    return this.http.put<Car>(`${this.baseUrl}/cars/${existingId}`, carForm, getAuthHeader());
  }

  deleteCar$(existingId: number): Observable<Car>{
    return this.http.delete<Car>(`${this.baseUrl}/cars/${existingId}`, getAuthHeader());
  }
}
