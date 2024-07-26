import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrPageImpactItemDetailComponent } from './ecr-page-impact-item-detail.component';

describe('EcrPageImpactItemDetailComponent', () => {
  let component: EcrPageImpactItemDetailComponent;
  let fixture: ComponentFixture<EcrPageImpactItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcrPageImpactItemDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcrPageImpactItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
