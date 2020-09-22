import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextsComponent } from './texts/texts.component';



@NgModule({
  declarations: [TextsComponent],
  imports: [
    CommonModule
  ],
  exports: [TextsComponent]
})
export class TextReportModule { }
