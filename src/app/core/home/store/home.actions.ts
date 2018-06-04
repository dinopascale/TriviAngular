import { Action } from '@ngrx/store';

export const START_NEW_SESSION = 'START_NEW_SESSION';
export const END_SESSION = 'END_SESSION';

export class StartNewSession implements Action {
    readonly type = START_NEW_SESSION;
}

export class EndSession implements Action {
    readonly type = END_SESSION;
}

export type HomeActions = StartNewSession | EndSession;
