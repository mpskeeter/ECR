import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlValueAccessorConnectorComponent } from './form-control-value-accessor-connector.component';

describe('FormControlValueAccessorConnectorComponent', () => {
  let component: FormControlValueAccessorConnectorComponent;
  let fixture: ComponentFixture<FormControlValueAccessorConnectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControlValueAccessorConnectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormControlValueAccessorConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
