import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsingleenquiryComponent } from './viewsingleenquiry.component';

describe('ViewsingleenquiryComponent', () => {
  let component: ViewsingleenquiryComponent;
  let fixture: ComponentFixture<ViewsingleenquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewsingleenquiryComponent]
    });
    fixture = TestBed.createComponent(ViewsingleenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
