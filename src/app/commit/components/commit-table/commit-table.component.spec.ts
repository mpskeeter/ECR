import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitTableComponent } from './commit-table.component';

describe('CommitTableComponent', () => {
  let component: CommitTableComponent;
  let fixture: ComponentFixture<CommitTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommitTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
