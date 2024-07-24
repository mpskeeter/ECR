import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrPageBlockComponent } from './ecr-page-block.component';

describe('EcrPageBlockComponent', () => {
  let component: EcrPageBlockComponent;
  let fixture: ComponentFixture<EcrPageBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcrPageBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcrPageBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
