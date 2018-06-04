import { Action } from '@ngrx/store';

import { Options } from './../../shared/options.model';

export const SET_OPTIONS = 'SET_OPTIONS';

export class SetOptions implements Action {
    readonly type = SET_OPTIONS;

    constructor(public payload: Options) {}
}

export type OptionsAction = SetOptions;
