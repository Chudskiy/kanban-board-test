import {ADD_COLUMN, ADD_TASK} from "../actions/types";

const initialState = [];

const boardsReducer = (state = initialState, action) => {
    console.log('Reducer state = ', state);

    switch (action.type) {
        case ADD_TASK:
            const {id, title, columnId} = action.payload;

            const updatedTasks = [...state];

            updatedTasks.push({id, title, columnId, index: updatedTasks.length});

            return updatedTasks;
        default:
            return state;
    }
};


export default boardsReducer;