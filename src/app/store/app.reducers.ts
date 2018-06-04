import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';

import * as fromHome from '../core/home/store/home.reducers';
import * as fromModalLayer from '../core/modal-layer/store/modal-layer.reducers';

export interface AppState {
    session: fromHome.State;
    modal: fromModalLayer.State;
}

export const reducers: ActionReducerMap<AppState> = {
    session: fromHome.HomeReducers,
    modal: fromModalLayer.ModalLayerReducers
};

export function resetGame(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return function(state: AppState, action: any): AppState {
        if (action.type === 'END_SESSION') {
            state = undefined;
        }
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<AppState>[] = [resetGame];
