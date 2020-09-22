import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { OfflineService } from './core/services/offline.service';
declare var $: any;

interface ApiData {
  title: string;
  body: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'reporter';

  isCollapsed: boolean;
  public apiData: ApiData[];
  constructor(private http: HttpClient, private offlineServ: OfflineService) {
    this.fetchdata();

  }
  ngOnInit() {
    // $(document).ready(function() {
    //   alert('I am Called From jQuery');
    // });
  }

  fetchdata() {
    this.http.get<ApiData[]>('https://reporter-90253.firebaseio.com/reports.json').subscribe(data => {
      console.log(data[1].body);
      this.apiData = data
    });
  }

  // toggleNavbar() {

  //   this.isCollapsed = !this.isCollapsed;
  // }
}
