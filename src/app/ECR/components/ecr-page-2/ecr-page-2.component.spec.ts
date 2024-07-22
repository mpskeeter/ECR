import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrPage2Component } from './ecr-page-2.component';

describe('EcrPage2Component', () => {
  let component: EcrPage2Component;
  let fixture: ComponentFixture<EcrPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcrPage2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcrPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
