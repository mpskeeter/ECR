import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrPage3Component } from './ecr-page-3.component';

describe('EcrPage3Component', () => {
  let component: EcrPage3Component;
  let fixture: ComponentFixture<EcrPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcrPage3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcrPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
