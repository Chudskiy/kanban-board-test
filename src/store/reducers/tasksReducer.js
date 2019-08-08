import {ADD_TASK, REORDER_TASKS, REORDER_TASKS_IN_COLUMN} from "../actions/types";
import uuidv4 from 'uuid/v4'
import produce from "immer";

const id = uuidv4();

const initialState = {
    byId: {
        [id]: {
            id: id,
            title: 'default task',
            description: '',
            index: 1
        },
    },
    allIds: [id],
};


const boardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const {id, title, description} = action.payload;

            const newTask = {
                id,
                title,
                description,
                index: state.allIds.length
            };

            return produce(state, draft => {
                draft.byId[id] = newTask;
                draft.allIds.push(id);
            });

        default:
            return state;
    }
};


export default boardsReducer;