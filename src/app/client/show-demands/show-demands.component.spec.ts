import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDemandsComponent } from './show-demands.component';

describe('ShowDemandsComponent', () => {
  let component: ShowDemandsComponent;
  let fixture: ComponentFixture<ShowDemandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDemandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDemandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
