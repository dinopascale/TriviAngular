import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import * as fromQuestions from './store/questions.reducers';
import * as QuestionsActions from './store/questions.actions';

import { QuestionsResponse } from './../shared/triviaCategories.model';

@Injectable()
export class QuestionsResolver implements Resolve<boolean> {
    constructor(private store: Store<fromQuestions.FeatureState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.store.dispatch(new QuestionsActions.TryFetchQuestions());
        return true;
    }
}
