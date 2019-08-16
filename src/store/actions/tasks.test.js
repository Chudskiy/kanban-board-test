import {ADD_TASK, CHANGE_COLUMN_ID_IN_TASK, REMOVE_TASK, UPDATE_TASK} from "./types";
import {add_task, change_column_id_in_task, remove_task, update_task} from "./tasks";

describe('tasks actions', () => {
    it('should create an action to add task', () => {
        const expectedAction = {
            type: ADD_TASK,
            payload: {}
        };

        expect(add_task({})).toEqual(expectedAction)
    });

    it('should create an action to update task', () => {
        const expectedAction = {
            type: UPDATE_TASK,
            payload: {}
        };

        expect(update_task({})).toEqual(expectedAction)
    });

    it('should create an action to remove task', () => {
        const expectedAction = {
            type: REMOVE_TASK,
            payload: {}
        };

        expect(remove_task({})).toEqual(expectedAction)
    });

    it('should create an action to change column id in tasks', () => {
        const expectedAction = {
            type: CHANGE_COLUMN_ID_IN_TASK,
            payload: {}
        };

        expect(change_column_id_in_task({})).toEqual(expectedAction)
    });
});