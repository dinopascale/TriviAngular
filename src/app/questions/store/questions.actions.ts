import { Action } from '@ngrx/store';

import { Question } from './../../shared/questions.model';

export const TRY_FETCH_QUESTIONS = 'TRY_FETCH_QUESTIONS';
export const ERR_FETCH_QUESTIONS = 'ERR_FETCH_QUESTIONS';
export const SET_QUESTIONS = 'SET_QUESTIONS';
export const ERR_SET_QUESTIONS = 'ERR_SET_QUESTIONS';
export const SET_ANSWER = 'SET_ANSWER';
export const SET_LAST_ANSWER = 'SET_LAST_ANSWER';

export class TryFetchQuestions implements Action {
    readonly type = TRY_FETCH_QUESTIONS;
}

export class ErrFetchQuestions implements Action {
    readonly type = ERR_FETCH_QUESTIONS;
}

export class SetQuestions implements Action {
    readonly type = SET_QUESTIONS;

    constructor(public payload: Question[]) {}
}

export class ErrSetQuestions implements Action {
    readonly type = ERR_SET_QUESTIONS;
}

export class SetAnswer implements Action {
    readonly type = SET_ANSWER;

    constructor(public payload: {answer: string}) {}
}

export class SetLastAnswer implements Action {
    readonly type = SET_LAST_ANSWER;

    constructor(public payload: {answer: string}) {}
}

export type QuestionsActions = TryFetchQuestions |
                               SetQuestions |
                               ErrSetQuestions |
                               ErrFetchQuestions |
                               SetAnswer |
                               SetLastAnswer;
