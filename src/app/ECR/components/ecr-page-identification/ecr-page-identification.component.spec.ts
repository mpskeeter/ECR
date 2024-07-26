import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrPageIdentificationComponent } from './ecr-page-identification.component';

describe('EcrPageIdentificationComponent', () => {
  let component: EcrPageIdentificationComponent;
  let fixture: ComponentFixture<EcrPageIdentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcrPageIdentificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcrPageIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
