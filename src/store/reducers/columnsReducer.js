import produce from "immer";
import {handleActions} from "redux-actions";


const initialState = {
    byId: {},
    allIds: [],
};


const add_column = (state, action) => {
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
};

const update_column = (columns, action) => {
    const {columnId, title} = action.payload;

    return produce(columns, draft => {
        draft.byId[columnId].title = title
    })
};

const remove_column = (columns, action) => {
    const {columnId} = action.payload;

    const updatedColumns = columns.allIds.filter(id => id !== columnId);

    return produce(columns, draft => {
        delete draft.byId[columnId];
        draft.allIds = updatedColumns;
    });
};

const add_task_to_column = (columns, action) => {
    const {columnId, taskId} = action.payload;

    return produce(columns, draft => {
        draft.byId[columnId].tasks.push(taskId)
    });
};

const remove_task_from_column = (columns, action) => {
    const {columnId, taskId} = action.payload;

    const tasks = columns.byId[columnId].tasks;
    const updatedTasks = tasks.filter(id => id !== taskId);

    return produce(columns, draft => {
        draft.byId[columnId].tasks = updatedTasks
    });
};

const update_task_position_in_column = (columns, action) => {
    const {destColumnId, sourceColumnId, tasks} = action.payload;

    console.log(tasks);

    return produce(columns, draft => {
        draft.byId[destColumnId].tasks = [...tasks[destColumnId]];
        draft.byId[sourceColumnId].tasks = [...tasks[sourceColumnId]];
    });
};

const reorder_tasks_in_column = (columns, action) => {
    const {columnId, tasks} = action.payload;

    return produce(columns, draft => {
        draft.byId[columnId].tasks = tasks
    });
};

const columnsReducer = handleActions(
    {
        add_column,
        update_column,
        remove_column,
        remove_task_from_column,
        reorder_tasks_in_column,
        update_task_position_in_column,
        add_task_to_column
    },
    initialState
);

export default columnsReducer;