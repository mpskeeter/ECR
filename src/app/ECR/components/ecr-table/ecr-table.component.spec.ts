import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrTableComponent } from './ecr-table.component';

describe('EcrTableComponent', () => {
  let component: EcrTableComponent;
  let fixture: ComponentFixture<EcrTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcrTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcrTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
