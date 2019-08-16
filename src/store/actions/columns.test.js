import {ADD_COLUMN, ADD_TASK_TO_COLUMN, REMOVE_COLUMN, UPDATE_COLUMN} from "./types";
import {add_column, add_task_to_column, remove_column, update_column} from "./columns";


describe('boards actions', () => {
    it('should create an action to add column', () => {
        const expectedAction = {
            type: ADD_COLUMN,
            payload: {}
        };

        expect(add_column({})).toEqual(expectedAction)
    });

    it('should create an action to update column', () => {
        const expectedAction = {
            type: UPDATE_COLUMN,
            payload: {}
        };

        expect(update_column({})).toEqual(expectedAction)
    });

    it('should create an action to add task to column', () => {
        const expectedAction = {
            type: ADD_TASK_TO_COLUMN,
            payload: {}
        };

        expect(add_task_to_column({})).toEqual(expectedAction)
    });

    it('should create an action to remove column', () => {
        const expectedAction = {
            type: REMOVE_COLUMN,
            payload: {}
        };

        expect(remove_column({})).toEqual(expectedAction)
    });
});