import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrCardComponent } from './ecr-card.component';

describe('EcrCardComponent', () => {
  let component: EcrCardComponent;
  let fixture: ComponentFixture<EcrCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcrCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcrCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
