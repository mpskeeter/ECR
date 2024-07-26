import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrPageImpactCapabilitiesDetailComponent } from './ecr-page-impact-capabilities-detail.component';

describe('EcrPageImpactCapabilitiesDetailComponent', () => {
  let component: EcrPageImpactCapabilitiesDetailComponent;
  let fixture: ComponentFixture<EcrPageImpactCapabilitiesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcrPageImpactCapabilitiesDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcrPageImpactCapabilitiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
