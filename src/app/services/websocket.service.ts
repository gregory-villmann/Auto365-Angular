import {Injectable} from '@angular/core';
import {io, Socket} from 'socket.io-client';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:4000');
  }

  public listenToEvent(eventName: string): Observable<any> {
    return new Observable((observer) => {
      this.socket.on(eventName, (data: any) => {
        observer.next(data);
      });
    });
  }

}
