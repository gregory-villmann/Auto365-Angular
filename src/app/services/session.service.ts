import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

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

  deleteSession$(token: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/sessions`, {headers: new HttpHeaders({'token': token})});
  }
}
