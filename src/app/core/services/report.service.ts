import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Report } from '../models/Report';
import { IndexedDBService } from './indexed-db.service';
import { OfflineService } from './offline.service';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient,
    private offlineServ: OfflineService,
    private indexedDBServ: IndexedDBService,
    ) { }


  uploadReport(report) {

    console.log(report);
    this.http.post('https://reporter-90253.firebaseio.com/reports.json', report)
      .subscribe(resData => {

      },
        (err) => {
          this.indexedDBServ
            .addReport(JSON.stringify(report))
            .then(this.offlineServ.backgroundSync)
            .catch(console.log);
          console.log("Error posting data appcomp.ts");

        });
  }

  fetchReports(): Observable<Report[]> {   
    return this.http.get<Report[]>('https://reporter-90253.firebaseio.com/reports.json');     
  }
  
}
