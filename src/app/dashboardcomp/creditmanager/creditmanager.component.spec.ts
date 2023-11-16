import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditmanagerComponent } from './creditmanager.component';

describe('CreditmanagerComponent', () => {
  let component: CreditmanagerComponent;
  let fixture: ComponentFixture<CreditmanagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditmanagerComponent]
    });
    fixture = TestBed.createComponent(CreditmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
