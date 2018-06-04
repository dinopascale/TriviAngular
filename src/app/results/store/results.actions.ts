import { Action } from '@ngrx/store';

export const RESET_CHALLENGE = 'RESET_CHALLENGE';

export class ResetChallenge implements Action {
    readonly type = RESET_CHALLENGE;
}

export type ResultsActions = ResetChallenge;
