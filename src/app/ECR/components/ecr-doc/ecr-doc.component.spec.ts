import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrDocComponent } from './ecr-doc.component';

describe('EcrDocComponent', () => {
  let component: EcrDocComponent;
  let fixture: ComponentFixture<EcrDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcrDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcrDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
