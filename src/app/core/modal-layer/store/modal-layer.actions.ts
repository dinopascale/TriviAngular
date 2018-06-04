import { Action } from '@ngrx/store';

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export class ShowModal implements Action {
    readonly type = SHOW_MODAL;

    constructor(public payload: string) {}
}

export class HideModal implements Action {
    readonly type = HIDE_MODAL;
}

export type ModalLayerActions = ShowModal | HideModal;
