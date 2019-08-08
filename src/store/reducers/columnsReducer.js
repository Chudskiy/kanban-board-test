import {ADD_COLUMN, ADD_TASK_TO_COLUMN} from "../actions/types";
import uuidv4 from 'uuid/v4'
import produce from "immer";

const id = uuidv4();

const initialState = {
    byId: {
        [id]: {
            id: id,
            title: 'default column',
            tasks: [],
            index: 1
        },
    },
    allIds: [id],
};

const columnsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COLUMN:
            const {id, title} = action.payload;

            const newColumn = {
                id,
                title,
                tasks: [],
                index: state.allIds.length
            };

            return produce(state, draft => {
                draft.byId[id] = newColumn;
                draft.allIds.push(id);
            });

        case ADD_TASK_TO_COLUMN:
            const {columnId, taskId} = action.payload;

            return produce(state, draft => {
                draft.byId[columnId].tasks.push(taskId)
            });

        default:
            return state;
    }
};

export default columnsReducer;