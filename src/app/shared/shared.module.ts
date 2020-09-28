import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { AlertComponent } from './alert/alert.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectValidatorDirective } from './select-validator.directive';



@NgModule({
  declarations: [SpinnerComponent,  AlertComponent, SelectValidatorDirective
     ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports:[SpinnerComponent,AlertComponent]
})
export class SharedModule { }
