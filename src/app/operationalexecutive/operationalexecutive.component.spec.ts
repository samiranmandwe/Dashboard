import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalexecutiveComponent } from './operationalexecutive.component';

describe('OperationalexecutiveComponent', () => {
  let component: OperationalexecutiveComponent;
  let fixture: ComponentFixture<OperationalexecutiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperationalexecutiveComponent]
    });
    fixture = TestBed.createComponent(OperationalexecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
