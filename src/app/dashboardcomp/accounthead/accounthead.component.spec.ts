import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountheadComponent } from './accounthead.component';

describe('AccountheadComponent', () => {
  let component: AccountheadComponent;
  let fixture: ComponentFixture<AccountheadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountheadComponent]
    });
    fixture = TestBed.createComponent(AccountheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
