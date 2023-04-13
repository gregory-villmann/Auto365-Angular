import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {LogsService} from "../services/logs.service";

@Component({
  selector: 'app-logs-page',
  templateUrl: './logs-page.component.html',
  styleUrls: ['./logs-page.component.css']
})
export class LogsPageComponent {
  logs$: Observable<any> | undefined;

  displayedColumns = ['timestamp', 'level', 'message'];

  constructor(private service: LogsService) {
  }

  ngOnInit() {
    this.logs$ = this.service.getLogs$();
  }
}
