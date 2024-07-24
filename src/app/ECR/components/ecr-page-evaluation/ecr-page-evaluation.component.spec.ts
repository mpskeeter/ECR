import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrPageEvaluationComponent } from './ecr-page-evaluation.component';

describe('EcrPageEvaluationComponent', () => {
  let component: EcrPageEvaluationComponent;
  let fixture: ComponentFixture<EcrPageEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcrPageEvaluationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcrPageEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
