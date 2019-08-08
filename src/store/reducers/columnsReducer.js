import {ADD_COLUMN, ADD_TASK_TO_COLUMN} from "../actions/types";
import uuidv4 from 'uuid/v4'

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

const boardsReducer = (state = initialState, action) => {
    // console.log('Reducer state = ', state);

    switch (action.type) {
        case ADD_COLUMN:
            const {id, title} = action.payload;

            const allId = [...state.allIds];
            allId.push(id);

            const byId = {...state.byId};

            byId[id] = {
                id: id,
                title: title,
                tasks: [],
                index: allId.length
            };

            // const {id, title, boardId} = action.payload;
            //
            // const updatedColumns = [...state];
            //
            // updatedColumns.push({id, title, boardId, index: updatedColumns.length});
            //
            // return updatedColumns;

            return {
                byId: {...byId},
                allIds: allId
            };
        case ADD_TASK_TO_COLUMN:
            const {columnId, taskId} = action.payload;

            console.log('Column Id = ', columnId);

            const tasks = [...state.byIds[columnId].tasks];
            const newById = {...byId};
            tasks.push(taskId);

            newById[columnId].tasks = tasks;

            return {
                ...state,
                byId: {...newById}
            };
        default:
            return state;
    }
};


export default boardsReducer;