import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseSelectComponent } from './release-select.component';

describe('ReleaseSelectComponent', () => {
  let component: ReleaseSelectComponent;
  let fixture: ComponentFixture<ReleaseSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleaseSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleaseSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
