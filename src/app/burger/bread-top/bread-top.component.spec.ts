import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadTopComponent } from './bread-top.component';

describe('BreadTopComponent', () => {
  let component: BreadTopComponent;
  let fixture: ComponentFixture<BreadTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
