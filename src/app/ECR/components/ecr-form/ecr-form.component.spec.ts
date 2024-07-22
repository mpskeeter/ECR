import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrFormComponent } from './ecr-form.component';

describe('EcrFormComponent', () => {
  let component: EcrFormComponent;
  let fixture: ComponentFixture<EcrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcrFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
