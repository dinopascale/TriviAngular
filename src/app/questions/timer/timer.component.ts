import { map, switchMap } from 'rxjs/operators';
import { Observable, interval, of } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromQuestions from '../store/questions.reducers';
import * as ModalLayerActions from '../../core/modal-layer/store/modal-layer.actions';
import * as QuestionsAction from '../store/questions.actions';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
    timer$: Observable<number>;
    subcrib;
    timeLimit = 15;
    quizLen: number;

    constructor(private store: Store<fromQuestions.FeatureState>) { }

    ngOnInit() {
        this.subcrib = this.store.select('questions').subscribe(
            (data: fromQuestions.State) => {
                this.quizLen = data.questions.length;
            }
        );
        this.timer$ = this.store.select('questions').pipe(
            map((data: fromQuestions.State) => {
                return data.actualQuestion;
            }),
            switchMap((actualQ: number) => {
                return interval(1000).pipe(
                    map((i: number) => {
                        if ((this.timeLimit - i) < 0) {
                            if (actualQ + 1 === this.quizLen) {
                                this.store.dispatch(new ModalLayerActions.ShowModal('loading'));
                                this.store.dispatch(new QuestionsAction.SetLastAnswer({answer: ''}));
                            } else {
                                this.store.dispatch(new QuestionsAction.SetAnswer({answer: ''}));
                            }
                        }
                        return (this.timeLimit - i);
                    })
                );
            })
        );
    }

    ngOnDestroy () {
        this.subcrib.unsubscribe();
    }
}

