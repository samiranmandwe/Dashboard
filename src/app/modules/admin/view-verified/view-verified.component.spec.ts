import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVerifiedComponent } from './view-verified.component';

describe('ViewVerifiedComponent', () => {
  let component: ViewVerifiedComponent;
  let fixture: ComponentFixture<ViewVerifiedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewVerifiedComponent]
    });
    fixture = TestBed.createComponent(ViewVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
