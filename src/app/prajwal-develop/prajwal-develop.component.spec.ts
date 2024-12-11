import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrajwalDevelopComponent } from './prajwal-develop.component';

describe('PrajwalDevelopComponent', () => {
  let component: PrajwalDevelopComponent;
  let fixture: ComponentFixture<PrajwalDevelopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrajwalDevelopComponent]
    });
    fixture = TestBed.createComponent(PrajwalDevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
