import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LainComponent } from './lain.component';

describe('LainComponent', () => {
  let component: LainComponent;
  let fixture: ComponentFixture<LainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
