import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import * as fromQuestions from '../store/questions.reducers';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {
    questionsState$: Observable<fromQuestions.State>;

    constructor(private store: Store<fromQuestions.FeatureState>) {}

    ngOnInit() {
      this.questionsState$ = this.store.select('questions');
    }
}
