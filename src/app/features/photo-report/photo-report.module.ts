import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [PhotosComponent],
  imports: [
    CommonModule,
    FormsModule    
  ],
  exports: [PhotosComponent]
})
export class PhotoReportModule { }




