import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrPageImpactComponent } from './ecr-page-impact.component';

describe('EcrPage2Component', () => {
  let component: EcrPageImpactComponent;
  let fixture: ComponentFixture<EcrPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcrPageImpactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcrPageImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
