import produce from "immer";
import {handleActions} from 'redux-actions'

const initialState = {
    byId: {},
    allIds: [],
};

const add_task = (tasks, action) => {
    const {id, title, description, columnId, createdAt} = action.payload;

    const newTask = {
        id,
        title,
        description,
        columnId,
        createdAt,
        updatedAt: null
    };

    return produce(tasks, draft => {
        draft.byId[id] = newTask;
        draft.allIds.push(id);
    });


};

const update_task = (tasks, action) => {
    const {taskId, title, description, updatedAt} = action.payload;

    return produce(tasks, draft => {
        draft.byId[taskId].title = title;
        draft.byId[taskId].description = description;
        draft.byId[taskId].updatedAt = updatedAt;
    });
};

const remove_task = (tasks, action) => {
    const updatedTasksIds = tasks.allIds.filter(id => id !== action.payload.taskId);

    return produce(tasks, draft => {
        delete draft.byId[action.payload.taskId];
        draft.allIds = updatedTasksIds
    });
};

const change_column_id_in_task = (tasks, action) => {
    const {taskId, destColumnId} = action.payload;

    return produce(tasks, draft => {
        draft.byId[taskId].columnId = destColumnId
    });
};

const tasksReducer = handleActions(
    {
        add_task,
        update_task,
        remove_task,
        change_column_id_in_task
    },
    initialState
);

export default tasksReducer;