import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulanComponent } from './bulan.component';

describe('BulanComponent', () => {
  let component: BulanComponent;
  let fixture: ComponentFixture<BulanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
