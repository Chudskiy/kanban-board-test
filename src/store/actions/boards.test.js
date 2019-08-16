import uuidv4 from 'uuid/v4'
import {add_board, add_column_to_board, remove_column_from_board} from "./boards";
import {ADD_BOARD, ADD_COLUMN_TO_BOARD, REMOVE_COLUMN_FROM_BOARD} from "./types";

describe('boards actions', () => {
    it('should create an action to add board', () => {
        const id = uuidv4();

        const payload = {
            id,
            title: "board title"
        };

        const expectedAction = {
            type: ADD_BOARD,
            payload
        };

        expect(add_board(payload)).toEqual(expectedAction)
    });

    it('should create an action to add column to board', () => {
        const boardId = uuidv4();
        const columnId = uuidv4();

        const payload = {
            boardId,
            columnId
        };

        const expectedAction = {
            type: ADD_COLUMN_TO_BOARD,
            payload
        };

        expect(add_column_to_board(payload)).toEqual(expectedAction)
    });

    it('should create an action to remove column from board', () => {
        const boardId = uuidv4();
        const columnId = uuidv4();

        const payload = {
            boardId,
            columnId
        };

        const expectedAction = {
            type: REMOVE_COLUMN_FROM_BOARD,
            payload
        };

        expect(remove_column_from_board(payload)).toEqual(expectedAction)
    });
});