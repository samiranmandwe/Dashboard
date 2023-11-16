import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovesanctionletterComponent } from './approvesanctionletter.component';

describe('ApprovesanctionletterComponent', () => {
  let component: ApprovesanctionletterComponent;
  let fixture: ComponentFixture<ApprovesanctionletterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovesanctionletterComponent]
    });
    fixture = TestBed.createComponent(ApprovesanctionletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
