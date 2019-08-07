import {ADD_COLUMN} from "../actions/types";

const initialState = {
    columns: [{name: 'hello'}]
};

const boardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COLUMN:
            const newArray = [...initialState.columns];
            newArray.push(action.payload.column);

            return {
                ...state,
                columns: newArray
            };
        default:
            return state;
    }
};

export default boardsReducer;