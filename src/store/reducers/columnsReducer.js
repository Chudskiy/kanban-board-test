import {
    ADD_COLUMN,
    ADD_TASK_TO_COLUMN,
    REMOVE_COLUMN,
    REMOVE_TASK_FROM_COLUMN,
    REORDER_TASKS_IN_COLUMN,
    UPDATE_TASKS_IN_COLUMN
} from "../actions/types";
// import uuidv4 from 'uuid/v4'
import produce from "immer";

// const id = uuidv4();

const initialState = {
    // byId: {
    //     [id]: {
    //         id: id,
    //         title: 'default column',
    //         tasks: [],
    //         index: 1
    //     },
    // },
    // allIds: [id],
    byId: {},
    allIds: [],
};

const columnsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COLUMN:
            const {id, title, boardId} = action.payload;

            const newColumn = {
                id,
                title,
                boardId,
                tasks: [],
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

        case UPDATE_TASKS_IN_COLUMN:
            const {destColumnId, sourceColumnId, tasks} = action.payload;

            return produce(state, draft => {
                draft.byId[destColumnId].tasks = [...tasks[destColumnId]];
                draft.byId[sourceColumnId].tasks = [...tasks[sourceColumnId]];
            });

        case REMOVE_TASK_FROM_COLUMN:
            // const taskIndex = state.byId[action.payload.columnId].tasks.indexOf(action.payload.columnId);
            const updatedTasks = state.byId[action.payload.columnId].tasks.filter(taskId => taskId !== action.payload.taskId);
            //
            // console.log('COLUMN ID = ', action.payload.columnId);
            // console.log('COLUMN STATE = ', state.byId);
            // console.log('COLUMN TASKS = ', state.byId[action.payload.columnId].tasks);

            const nextState = produce(state, draft => {
                // draft.byId[action.payload.columnId].tasks.splice(taskIndex, 1);
                draft.byId[action.payload.columnId].tasks = updatedTasks
            });

            // console.log('COLUMN NEXT STATE', nextState);

            return nextState;
        // return produce(state, draft => {
        //     draft.byId[action.payload.columnId].tasks.splice(taskIndex, 1);
        // });

        case REORDER_TASKS_IN_COLUMN:
            return produce(state, draft => {
                draft.byId[action.payload.columnId].tasks = action.payload.tasks
            });

        case REMOVE_COLUMN:
            const updatedColumns = state.allIds.filter(id => id !== action.payload.columnId);

            return produce(state, draft => {
                delete draft.byId[action.payload.columnId];
                draft.allIds = updatedColumns;
            });

        default:
            return state;
    }
};

// function remove_column(columns, action) {
//     const {columnId} = action.payload;
//
//     const updatedColumns = columns.allIds.filter(id => id !== columnId);
//
//     return produce(columns, draft => {
//         delete draft.byId[columnId];
//         draft.allIds = updatedColumns;
//     })
// }
//
// const {reducer, actionTypes} = createReducerAndActionTypes(
//     {remove_column},
//     []
// );

//
// export default reducer;
// export {actionTypes};

export default columnsReducer;