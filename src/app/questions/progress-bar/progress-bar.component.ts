import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromQuestions from '../store/questions.reducers';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  actualQuestion$: Observable<fromQuestions.State>;

  constructor(private store: Store<fromQuestions.FeatureState>) { }

  ngOnInit() {
    this.actualQuestion$ = this.store.select('questions');
  }

}
