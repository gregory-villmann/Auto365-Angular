import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {getAuthHeader} from "../util/auth.util";

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  private baseUrl = 'https://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getLogs$(): Observable<any> {
    return this.http.get(`${this.baseUrl}/logs`, getAuthHeader())
  }
}
