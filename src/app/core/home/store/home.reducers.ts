import * as HomeActions from './home.actions';

export interface State {
    newSession: boolean;
}

const initialState: State = {
    newSession: false
};

export function HomeReducers (state = initialState, action: HomeActions.HomeActions) {
    switch (action.type) {
        case HomeActions.START_NEW_SESSION:
            return {
                ...state,
                newSession: true
            };
        default:
            return state;
    }
}
