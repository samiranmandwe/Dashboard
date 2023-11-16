import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvebarComponent } from './nvebar.component';

describe('NvebarComponent', () => {
  let component: NvebarComponent;
  let fixture: ComponentFixture<NvebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NvebarComponent]
    });
    fixture = TestBed.createComponent(NvebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
