import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitSelectComponent } from './commit-select.component';

describe('CommitSelectComponent', () => {
  let component: CommitSelectComponent;
  let fixture: ComponentFixture<CommitSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommitSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
