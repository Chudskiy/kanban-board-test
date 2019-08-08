import {ADD_COLUMN} from "../actions/types";

const initialState = [];

const boardsReducer = (state = initialState, action) => {
    console.log('Reducer state = ', state);

    switch (action.type) {
        case ADD_COLUMN:
            const {id, title, boardId} = action.payload;

            const updatedColumns = [...state];

            updatedColumns.push({id, title, boardId, index: updatedColumns.length});

            return updatedColumns;
        default:
            return state;
    }
};


export default boardsReducer;