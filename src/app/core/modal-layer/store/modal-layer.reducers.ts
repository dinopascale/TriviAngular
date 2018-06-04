import * as ModalLayerActions from './modal-layer.actions';

export interface State {
    isModalOpen: boolean;
    typeOfModal: string;
}

const initialState: State = {
    isModalOpen: false,
    typeOfModal: ''
};

export function ModalLayerReducers (state = initialState, action: ModalLayerActions.ModalLayerActions) {
    switch (action.type) {
        case ModalLayerActions.SHOW_MODAL:
            return {
                ...state,
                isModalOpen: true,
                typeOfModal: action.payload
            };
        case ModalLayerActions.HIDE_MODAL:
            return {
                ...state,
                isModalOpen: false,
                typeOfModal: ''
            };
        default:
            return {...state};
    }
}
