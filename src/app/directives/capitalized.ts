import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCapitalized]',
  providers: [{
      provide: NG_VALIDATORS,
      useExisting: Capitalized,
      multi: true,
    }],
  standalone: false
})
export class Capitalized implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value && typeof value === 'string' && value.length > 0) {
      const isCapitalized = value[0] === value[0].toUpperCase();
      return isCapitalized ? null : { capitalized: true };
    }
    return null;
  }
  

}
