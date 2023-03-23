import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  register$(registrationForm: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/register`, registrationForm);
  }
}
