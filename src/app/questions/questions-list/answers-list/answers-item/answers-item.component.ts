import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';

import * as fromQuestions from '../../../store/questions.reducers';
import * as QuestionsActions from '../../../store/questions.actions';

@Component({
  selector: 'app-answers-item',
  templateUrl: './answers-item.component.html',
  styleUrls: ['./answers-item.component.css']
})
export class AnswersItemComponent implements OnInit {
    @Input() answer: string;

    isLast: boolean;

    constructor(private store: Store<fromQuestions.FeatureState>) { }

    ngOnInit () {
        this.store.select('questions')
            .subscribe((state: fromQuestions.State) => {
                this.isLast = state.actualQuestion === state.questions.length - 1 ;
            });
    }

    onAnswered () {
        if (this.isLast) {
            this.store.dispatch(new QuestionsActions.SetLastAnswer({answer: this.answer}));
        } else {
            this.store.dispatch(new QuestionsActions.SetAnswer({answer: this.answer}));
        }
    }

}
