import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadBottomComponent } from './bread-bottom.component';

describe('BreadBottomComponent', () => {
  let component: BreadBottomComponent;
  let fixture: ComponentFixture<BreadBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
