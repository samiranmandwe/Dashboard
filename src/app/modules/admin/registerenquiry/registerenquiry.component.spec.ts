import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterenquiryComponent } from './registerenquiry.component';

describe('RegisterenquiryComponent', () => {
  let component: RegisterenquiryComponent;
  let fixture: ComponentFixture<RegisterenquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterenquiryComponent]
    });
    fixture = TestBed.createComponent(RegisterenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
