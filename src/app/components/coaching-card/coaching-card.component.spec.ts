import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachingCardComponent } from './coaching-card.component';

describe('CoachingCardComponent', () => {
  let component: CoachingCardComponent;
  let fixture: ComponentFixture<CoachingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
