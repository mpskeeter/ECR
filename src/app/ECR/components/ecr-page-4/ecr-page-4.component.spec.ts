import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrPage4Component } from './ecr-page-4.component';

describe('EcrPage4Component', () => {
  let component: EcrPage4Component;
  let fixture: ComponentFixture<EcrPage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcrPage4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcrPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
