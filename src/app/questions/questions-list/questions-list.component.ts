import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

import * as fromQuestions from '../store/questions.reducers';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css'],
  animations: [
      trigger('slideInOut', [
          transition(':enter', [
              style({transform: 'translateX(100%)', opacity: '0'}),
              animate('600ms ease-in', style({transform: 'translateX(0%)', opacity: '1'}))
          ]),
          transition(':leave', [
              animate('300ms ease-in', style({transform: 'translateX(-100%)', opacity: '0'}))
          ]),
          state('*', style({ transform: 'translateX(0%)', opacity: '1' }))
      ])
  ]
})
export class QuestionsListComponent implements OnInit {
    questionsState$: Observable<fromQuestions.State>;

    constructor(private store: Store<fromQuestions.FeatureState>) {}

    ngOnInit() {
      this.questionsState$ = this.store.select('questions');
    }
}
