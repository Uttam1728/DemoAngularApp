import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFordemoComponent } from './ng-fordemo.component';

describe('NgFordemoComponent', () => {
  let component: NgFordemoComponent;
  let fixture: ComponentFixture<NgFordemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFordemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFordemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
