import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appSelectValidator]'
})
export class SelectValidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    console.log("test");
    throw new Error('Method not implemented.');
  }
  registerOnValidatorChange?(fn: () => void): void {
    console.log("SelectValidatorDirective : test");

    throw new Error('Method not implemented.');
  }

}
