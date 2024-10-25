import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appTaken]',
  standalone: true,
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(()=> TakenDirective),
    multi: true
  }]
})
export class TakenDirective /*extends AsyncValidator */{
  /*async validate(control: AbstractControl) : Promise<ValidationErrors | null> 
  constructor() { }*/

}
