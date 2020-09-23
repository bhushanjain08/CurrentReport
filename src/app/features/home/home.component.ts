import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/core/models/Report';
import { ReportService } from 'src/app/core/services/report.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public reports: Report[] = [];

  constructor(private reportServ: ReportService) {
    this.fetchData();
  }

  ngOnInit(): void {
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

    });
  }

}
