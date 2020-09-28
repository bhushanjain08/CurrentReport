import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appSelectValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: SelectValidatorDirective,
    multi: true
  }]
})

export class SelectValidatorDirective implements Validator {

  // constructor() { }

  @Input('appSelectValidator') categoryNotAllowed: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    console.log("Value "+control.value)
    console.log(control.value === this.categoryNotAllowed ? { 'defaultSelected': true } : null);

    return control.value === this.categoryNotAllowed ? { 'defaultSelected': true } : null;
    //throw new Error('Method not implemented.');
  }

  // registerOnValidatorChange?(fn: () => void): void {
  //   console.log("SelectValidatorDirective : test");

  //   throw new Error('Method not implemented.');
  // }

}
