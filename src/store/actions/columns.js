import {
    ADD_COLUMN,
    ADD_TASK_TO_COLUMN,
    REMOVE_COLUMN,
    REMOVE_TASK_FROM_COLUMN,
    REORDER_TASKS_IN_COLUMNS,
    UPDATE_TASK_POSITION_IN_COLUMN
} from "./types";

export const add_column = (payload) => {
    return {
        type: ADD_COLUMN,
        payload
    }
};


export const add_task_to_column = (payload) => {
    return {
        type: ADD_TASK_TO_COLUMN,
        payload
    }
};

export const remove_column = (payload) => {
    return {
        type: REMOVE_COLUMN,
        payload
    }
};

export const remove_task_from_column = (payload) => {
    return {
        type: REMOVE_TASK_FROM_COLUMN,
        payload
    }
};

export const reorder_tasks_in_columns = (payload) => {
    return {
        type: REORDER_TASKS_IN_COLUMNS,
        payload
    }
};

export const update_task_position_in_column = (payload) => {
    return {
        type: UPDATE_TASK_POSITION_IN_COLUMN,
        payload
    }
};

