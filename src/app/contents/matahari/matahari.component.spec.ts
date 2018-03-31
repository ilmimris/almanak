import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatahariComponent } from './matahari.component';

describe('MatahariComponent', () => {
  let component: MatahariComponent;
  let fixture: ComponentFixture<MatahariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatahariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatahariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
