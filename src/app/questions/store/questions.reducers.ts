import * as fromApp from '../../store/app.reducers';
import * as QuestionsActions from './questions.actions';

import { Question } from '../../shared/questions.model';


export interface FeatureState extends fromApp.AppState {
    questions: State;
}

export interface State {
    questions: Question[];
    actualQuestion: number;
    fetchError: boolean;
    setQuestionsError: boolean;
}

const initialState: State = {
    questions: [],
    actualQuestion: 0,
    fetchError: false,
    setQuestionsError: false
};

export function QuestionsReducers (state = initialState, action: QuestionsActions.QuestionsActions) {
    switch (action.type) {
        case QuestionsActions.SET_QUESTIONS:
            return {
                ...state,
                questions: [...action.payload]
            };
        case QuestionsActions.ERR_SET_QUESTIONS:
            return {
                ...state,
                setQuestionsError: true
            };
        case QuestionsActions.ERR_FETCH_QUESTIONS:
            return {
                ...state,
                fetchError: true,
                SetQuestionsError: true
            };
        case QuestionsActions.SET_ANSWER:
            const updatedQuestions = state.questions.map((q, i) => {
                if (i === state.actualQuestion) {
                    return { ...q, userAnswer: action.payload.answer};
                }
                return q;
            });
            return {
                ...state,
                questions: updatedQuestions,
                actualQuestion: state.actualQuestion + 1
            };
        default:
            return state;
    }
}
