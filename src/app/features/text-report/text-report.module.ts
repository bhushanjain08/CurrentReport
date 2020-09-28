import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextsComponent } from './texts/texts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SelectValidatorDirective } from 'src/app/shared/select-validator.directive';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [TextsComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [TextsComponent]
})
export class TextReportModule { }
