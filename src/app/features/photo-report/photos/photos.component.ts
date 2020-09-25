import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Report } from 'src/app/core/models/Report';
import { ReportService } from 'src/app/core/services/report.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @ViewChild('textform') textform: NgForm;
  report: Report;
  constructor(private uploadServ: ReportService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // console.log(this.textform);
    this.report = new Report();
    this.report.body = this.textform.controls["description"].value;
    this.report.headline = this.textform.controls["headline"].value;
    this.report.category = this.textform.controls["category"].value;
    // console.log(this.report);
    this.uploadServ.uploadReport(this.report);
    this.textform.reset();
  }

}
