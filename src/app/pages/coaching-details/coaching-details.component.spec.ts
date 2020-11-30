import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachingDetailsComponent } from './coaching-details.component';

describe('CoachingDetailsComponent', () => {
  let component: CoachingDetailsComponent;
  let fixture: ComponentFixture<CoachingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
