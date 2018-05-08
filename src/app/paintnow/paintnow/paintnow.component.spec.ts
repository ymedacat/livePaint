import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintnowComponent } from './paintnow.component';

describe('PaintnowComponent', () => {
  let component: PaintnowComponent;
  let fixture: ComponentFixture<PaintnowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintnowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
