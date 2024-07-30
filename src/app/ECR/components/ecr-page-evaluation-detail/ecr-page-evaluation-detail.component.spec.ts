import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrPageEvaluationDetailComponent } from './ecr-page-evaluation-detail.component';

describe('EcrPageEvaluationDetailComponent', () => {
  let component: EcrPageEvaluationDetailComponent;
  let fixture: ComponentFixture<EcrPageEvaluationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcrPageEvaluationDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcrPageEvaluationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
