import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsItemComponent } from './questions-item.component';

describe('QuestionsItemComponent', () => {
  let component: QuestionsItemComponent;
  let fixture: ComponentFixture<QuestionsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
