import {ADD_TASK, CHANGE_COLUMN_ID_IN_TASK, REMOVE_TASK, UPDATE_TASK} from "../actions/types";
// import uuidv4 from 'uuid/v4'
import produce from "immer";

// const id = uuidv4();

const initialState = {
    // byId: {
    //     [id]: {
    //         id: id,
    //         title: 'default task',
    //         description: '',
    //         index: 1
    //     },
    // },
    // allIds: [id],
    byId: {},
    allIds: [],
};


const boardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const {id, title, description, columnId} = action.payload;

            const newTask = {
                id,
                title,
                description,
                columnId,
            };

            return produce(state, draft => {
                draft.byId[id] = newTask;
                draft.allIds.push(id);
            });

        case UPDATE_TASK:
            return produce(state, draft => {
                draft.byId[action.payload.taskId].title = action.payload.title;
                draft.byId[action.payload.taskId].description = action.payload.description;
            });

        case REMOVE_TASK:
            const updatedTasksIds = state.allIds.filter(taskId => taskId !== action.payload.taskId);

            return produce(state, draft => {
                delete draft.byId[action.payload.taskId];
                draft.allIds = updatedTasksIds
            });

        case CHANGE_COLUMN_ID_IN_TASK:
            return produce(state, draft => {
                draft.byId[action.payload.taskId].columnId = action.payload.destColumnId
            });

        default:
            return state;
    }
};


export default boardsReducer;