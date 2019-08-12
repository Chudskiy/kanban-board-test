import {
    ADD_TASK,
    CHANGE_COLUMN_ID_IN_TASK,
    REMOVE_TASK,
    UPDATE_TASK
} from "./types";

export const add_task = (payload) => {
    return {
        type: ADD_TASK,
        payload
    }
};


export const update_task = (payload) => {
    return {
        type: UPDATE_TASK,
        payload
    }
};

export const remove_task = (payload) => {
    return {
        type: REMOVE_TASK,
        payload
    }
};

export const change_column_id_in_task = (payload) => {
    return {
        type: CHANGE_COLUMN_ID_IN_TASK,
        payload
    }
};



