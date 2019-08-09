import {ADD_TASK, REMOVE_TASK, UPDATE_TASK} from "../actions/types";
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
            const taskIndex = state.allIds[action.payload.taskId];

            const updatedTasksIds = state.allIds.filter(taskId => taskId !== action.payload.taskId);

            // console.log('ALL IDS =', state.allIds);
            //
            // console.log('Task id = ', action.payload.taskId);
            // console.log('Updated = ', updatedTasksIds);


            // const nextState =  produce(state, draft => {
            //     delete draft.byId[action.payload.taskId];
            //     // draft.allIds.filter(id => id !== action.payload.taskId)
            //     draft.allIds = [...updatedTasksIds]
            // });
            //
            // return nextState;
            return produce(state, draft => {
                delete draft.byId[action.payload.taskId];
                // draft.allIds.filter(id => id !== action.payload.taskId)
                draft.allIds = updatedTasksIds
            });

            // console.log('TASKS NEXT STATE = ', nextState);

        default:
            return state;
    }
};


export default boardsReducer;