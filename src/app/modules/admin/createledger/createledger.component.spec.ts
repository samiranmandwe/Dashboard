import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateledgerComponent } from './createledger.component';

describe('CreateledgerComponent', () => {
  let component: CreateledgerComponent;
  let fixture: ComponentFixture<CreateledgerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateledgerComponent]
    });
    fixture = TestBed.createComponent(CreateledgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
