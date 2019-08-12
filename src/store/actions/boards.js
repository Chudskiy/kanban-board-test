import {ADD_BOARD, ADD_COLUMN_TO_BOARD, REMOVE_COLUMN_FROM_BOARD} from "./types";

export const add_board = (payload) => {
    return {
        type: ADD_BOARD,
        payload
    }
};

export const add_column_to_board = (payload) => {
    return {
        type: ADD_COLUMN_TO_BOARD,
        payload
    }
};

export const remove_column_from_board = (payload) => {
    return {
        type: REMOVE_COLUMN_FROM_BOARD,
        payload
    }
};