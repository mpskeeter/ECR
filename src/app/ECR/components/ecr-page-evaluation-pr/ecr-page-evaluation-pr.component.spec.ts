import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrPageEvaluationPrComponent } from './ecr-page-evaluation-pr.component';

describe('EcrPageEvaluationPrComponent', () => {
  let component: EcrPageEvaluationPrComponent;
  let fixture: ComponentFixture<EcrPageEvaluationPrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcrPageEvaluationPrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcrPageEvaluationPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
