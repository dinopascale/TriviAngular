import { map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, CanDeactivate } from '@angular/router';

import * as fromQuestions from './store/questions.reducers';
import * as fromModalLayer from '../core/modal-layer/store/modal-layer.reducers';
import * as ModalLayerActions from './../core/modal-layer/store/modal-layer.actions';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit, OnDestroy {
    questionState: fromQuestions.FeatureState;
    subscription: Subscription;

    constructor (private store: Store<fromQuestions.FeatureState>) {}

    ngOnInit () {
        this.subscription = this.store.subscribe((state: fromQuestions.FeatureState) => {
            this.questionState = {...state};
        });
    }

    canDeactivate(): Observable<boolean> | boolean {
       if (this.questionState.questions.actualQuestion <= this.questionState.questions.questions.length - 1) {
           this.store.dispatch(new ModalLayerActions.ShowModal('pause'));
           return !this.questionState.modal.isModalOpen;
       } else {
           return true;
       }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
      }
}
