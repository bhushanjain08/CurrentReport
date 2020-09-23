import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextsComponent } from './texts/texts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [TextsComponent],
  imports: [
    CommonModule,
    FormsModule        
  ],
  exports: [TextsComponent]
})
export class TextReportModule { }
