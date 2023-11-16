import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalExecutiveComponent } from './operational-executive.component';

describe('OperationalExecutiveComponent', () => {
  let component: OperationalExecutiveComponent;
  let fixture: ComponentFixture<OperationalExecutiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperationalExecutiveComponent]
    });
    fixture = TestBed.createComponent(OperationalExecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
