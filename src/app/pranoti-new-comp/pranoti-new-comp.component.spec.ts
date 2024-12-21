import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PranotiNewCompComponent } from './pranoti-new-comp.component';

describe('PranotiNewCompComponent', () => {
  let component: PranotiNewCompComponent;
  let fixture: ComponentFixture<PranotiNewCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PranotiNewCompComponent]
    });
    fixture = TestBed.createComponent(PranotiNewCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
