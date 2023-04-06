import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {getAuthHeader} from "../util/auth.util";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  session$(loginForm: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/sessions`, loginForm);
  }

  deleteSession$(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/sessions`, getAuthHeader());
  }
}
