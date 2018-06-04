import * as fromApp from '../../store/app.reducers';
import * as fromQuestions from '../../questions/store/questions.reducers';
import { Options } from './../../shared/options.model';

import * as ResultsActions from './results.actions';

export interface FeatureState extends fromApp.AppState {
    options: Options;
    questions: fromQuestions.State;
}


export function ResultsReducers (state, action: ResultsActions.ResultsActions) {
    switch (action.type) {
        default:
            return {
                ...state
            };
    }
}
