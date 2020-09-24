import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report/report.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,   
    ScrollingModule,
    InfiniteScrollModule,
    SharedModule
  ],
  exports:[ReportComponent]
})
export class ReportsModule { }
