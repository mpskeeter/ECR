import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrPageRecommendationComponent } from './ecr-page-recommendation.component';

describe('EcrPageRecommendationComponent', () => {
  let component: EcrPageRecommendationComponent;
  let fixture: ComponentFixture<EcrPageRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcrPageRecommendationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcrPageRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
