import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Report } from 'src/app/core/models/Report';
import { ReportService } from 'src/app/core/services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {

  constructor(private reportServ: ReportService) {

  }

  throttle = 10;
  scrollDistance = 2;
  finished = false;
  lastKey = 0;
  spinner = true;
  public reports: Report[] = [];
  public reportsBSubject = new BehaviorSubject([]);

  ngOnInit(): void {
    this.fetchData();
    this.finished = false;
  }

  fetchData() {
    this.reportServ.fetchReports().subscribe(data => {
      let report: Report;
      for (let key in data) {
        report = new Report();
        let obj: Report = data[key];
        report.headline = obj.headline;
        report.category = obj.category;
        report.body = obj.body;
        this.reports.push(report);

      }

      this.reportsBSubject.next(this.reports.slice(0, 6));
      this.lastKey = 6;
      this.spinner = false;
    });

  }


  getReports() {
    this.reportsBSubject.next(this.reports.slice(0, this.lastKey + 2));
    this.lastKey += 2;
    if (this.lastKey == this.reports.length || this.lastKey > this.reports.length) {
      this.finished = true;
    }

  }

  onScrollDown() {
    this.spinner =true;
    setTimeout(function(){
      this.spinner =false;
    },1000);
    this.getReports();
  }

  onUp() {
    console.log("Up");
  }

}
