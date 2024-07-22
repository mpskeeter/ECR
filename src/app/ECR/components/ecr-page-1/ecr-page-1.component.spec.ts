import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrPage1Component } from './ecr-page-1.component';

describe('EcrPage1Component', () => {
  let component: EcrPage1Component;
  let fixture: ComponentFixture<EcrPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcrPage1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcrPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
