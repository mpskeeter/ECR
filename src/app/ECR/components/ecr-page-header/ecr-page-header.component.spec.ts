import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrPageHeaderComponent } from './ecr-page-header.component';

describe('EcrPageHeaderComponent', () => {
  let component: EcrPageHeaderComponent;
  let fixture: ComponentFixture<EcrPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcrPageHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcrPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
