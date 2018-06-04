import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoQuestionsComponent } from './no-questions.component';

describe('NoQuestionsComponent', () => {
  let component: NoQuestionsComponent;
  let fixture: ComponentFixture<NoQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
