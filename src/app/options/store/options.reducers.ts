import * as fromApp from '../../store/app.reducers';
import * as OptionsActions from './options.actions';

import { Options } from './../../shared/options.model';

export interface FeatureState extends fromApp.AppState {
    userOptions: Options;
}

const initialState: Options = {
        amount: 10,
        difficulty: 'any',
        type: 'any',
        category: 'any'
};

export function OptionsReducers (state = initialState, action: OptionsActions.OptionsAction) {
    switch (action.type) {
        case OptionsActions.SET_OPTIONS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
