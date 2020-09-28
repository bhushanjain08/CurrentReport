import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PhotosComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule    
  ],
  exports: [PhotosComponent]
})
export class PhotoReportModule { }




