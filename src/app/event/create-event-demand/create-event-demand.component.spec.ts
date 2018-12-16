import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventDemandComponent } from './create-event-demand.component';

describe('CreateEventDemandComponent', () => {
  let component: CreateEventDemandComponent;
  let fixture: ComponentFixture<CreateEventDemandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventDemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
