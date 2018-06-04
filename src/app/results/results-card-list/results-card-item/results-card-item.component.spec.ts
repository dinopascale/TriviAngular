import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsCardItemComponent } from './results-card-item.component';

describe('ResultsCardItemComponent', () => {
  let component: ResultsCardItemComponent;
  let fixture: ComponentFixture<ResultsCardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsCardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
