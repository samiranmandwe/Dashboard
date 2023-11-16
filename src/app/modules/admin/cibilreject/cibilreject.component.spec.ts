import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CibilrejectComponent } from './cibilreject.component';

describe('CibilrejectComponent', () => {
  let component: CibilrejectComponent;
  let fixture: ComponentFixture<CibilrejectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CibilrejectComponent]
    });
    fixture = TestBed.createComponent(CibilrejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
