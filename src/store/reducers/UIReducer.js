import {HIDE_MODAL, SHOW_MODAL} from "../actions/types";
// import uuidv4 from 'uuid/v4'
import produce from "immer";

// const id = uuidv4();

const initialState = {
    modal: {
        isShowed: false,
        data: {}
        // children: null
    }
};


const boardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:

            return produce(state, draft => {
                draft.modal.isShowed = true;
                draft.modal.data = action.payload.data;
            });
        case HIDE_MODAL:

            return produce(state, draft => {
                draft.modal.isShowed = false;
                draft.modal.data = {}
            });
        default:
            return state;
    }
};


export default boardsReducer;