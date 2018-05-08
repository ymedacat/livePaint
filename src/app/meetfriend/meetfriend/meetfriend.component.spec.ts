import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetfriendComponent } from './meetfriend.component';

describe('MeetfriendComponent', () => {
  let component: MeetfriendComponent;
  let fixture: ComponentFixture<MeetfriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetfriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetfriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
