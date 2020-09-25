import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Report } from 'src/app/core/models/Report';
import { ReportService } from 'src/app/core/services/report.service';

@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.css']
})
export class TextsComponent implements OnInit {

  @ViewChild('textForm') textForm: NgForm;
  report: Report;
  constructor(private uploadServ: ReportService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // console.log(this.textForm);
    this.report = new Report();
    this.report.body = this.textForm.controls["description"].value;
    this.report.headline = this.textForm.controls["headline"].value;
    this.report.category = this.textForm.controls["category"].value;
    // console.log(this.report);
    this.uploadServ.uploadReport(this.report);
    this.textForm.reset();
  }

}
