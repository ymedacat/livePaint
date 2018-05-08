import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgselectComponent } from './imgselect.component';

describe('ImgselectComponent', () => {
  let component: ImgselectComponent;
  let fixture: ComponentFixture<ImgselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
