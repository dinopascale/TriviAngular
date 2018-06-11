import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import * as fromQuestions from './store/questions.reducers';
import * as ModalLayerActions from './../core/modal-layer/store/modal-layer.actions';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit, OnDestroy {
    questionState: fromQuestions.State;
    subscription: Subscription;

    constructor (private store: Store<fromQuestions.FeatureState>) {}

    ngOnInit () {
        this.subscription = this.store.select('questions').subscribe((state: fromQuestions.State) => {
            this.questionState = state;
        });
    }

    canDeactivate(): Observable<boolean> | boolean {
       if (this.questionState.actualQuestion <= this.questionState.questions.length - 1) {
           this.store.dispatch(new ModalLayerActions.ShowModal('pause'));
       } else {
           return true;
       }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
      }
}
