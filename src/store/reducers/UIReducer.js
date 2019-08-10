import produce from "immer";
import {handleActions} from "redux-actions";

const initialState = {
    modalIsShowed: false
};

const show_modal = (state, action) => {
    console.log('TOGGLE');

    return produce(state, draft => {
        draft.modalIsShowed = true
    })
};

const hide_modal = (state, action) => {
    return produce(state, draft => {
        draft.modalIsShowed = false
    })
};

const UIReducer = handleActions(
    {show_modal, hide_modal},
    initialState
);


export default UIReducer;