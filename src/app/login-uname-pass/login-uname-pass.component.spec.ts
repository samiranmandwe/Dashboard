import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUnamePassComponent } from './login-uname-pass.component';

describe('LoginUnamePassComponent', () => {
  let component: LoginUnamePassComponent;
  let fixture: ComponentFixture<LoginUnamePassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginUnamePassComponent]
    });
    fixture = TestBed.createComponent(LoginUnamePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
