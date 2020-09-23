import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Report } from './core/models/Report';
import { IndexedDBService } from './core/services/indexed-db.service';
import { OfflineService } from './core/services/offline.service';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Reporter';

  isCollapsed: boolean;
  public apiData: Report[] = [];

  constructor(private http: HttpClient,
    private offlineServ: OfflineService,
    private indexedDBServ: IndexedDBService) {
    // this.fetchdata();

  }
  ngOnInit() {
    // $(document).ready(function() {
    //   alert('I am Called From jQuery');
    // });
  }
  
}

