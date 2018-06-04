import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersItemComponent } from './answers-item.component';

describe('AnswersItemComponent', () => {
  let component: AnswersItemComponent;
  let fixture: ComponentFixture<AnswersItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswersItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
