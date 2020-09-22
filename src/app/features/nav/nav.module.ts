import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { TopnavComponent } from './topnav/topnav.component';



@NgModule({
  declarations: [SidenavbarComponent, TopnavComponent],
  imports: [
    CommonModule,
    NgbModule,
    BrowserModule
  ],
  exports: [SidenavbarComponent,TopnavComponent]
})
export class NavModule { }
