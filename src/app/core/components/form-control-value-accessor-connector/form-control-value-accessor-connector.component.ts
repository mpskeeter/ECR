import {Component, Injector, Input, ViewChild} from '@angular/core';
import {ControlContainer, ControlValueAccessor, FormControl, FormControlDirective} from '@angular/forms';

@Component({
  template: ''
})
export abstract class FormControlValueAccessorConnector implements ControlValueAccessor {
 @Input() formControl!: FormControl;
 @Input() formControlName: string = '';

  @ViewChild(FormControlDirective, {static: true}) formControlDirective!: FormControlDirective;

  protected constructor(private injector: Injector) {}

  /**
   *  Use this getter in FormControl on mat-select to make connection with provided formControl of Parent
   *
   *  this.formControl => When a formControl Obj is Provided from parent
   *  this.formControl => When name of a formControl in Parent Form is Provided
   *
   */
  get control() {
    return this.formControl || this.controlContainer?.control?.get(this.formControlName);
  }


  get controlContainer() {
    return this.injector.get(ControlContainer);
  }

  registerOnTouched(fn: any): void {
    this.formControlDirective.valueAccessor?.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective.valueAccessor?.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective.valueAccessor?.writeValue(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    this.formControlDirective?.valueAccessor?.setDisabledState?.(isDisabled);
  }
}