import reducer from "./tasksReducer"
import uuidv4 from 'uuid/v4'
import {ADD_TASK, CHANGE_COLUMN_ID_IN_TASK, REMOVE_TASK, UPDATE_TASK} from "../actions/types";

let columnId;
let columnId2;
let taskId;
let createdAt;
let updatedAt;

beforeEach(function () {
    columnId = uuidv4();
    columnId2 = uuidv4();

    taskId = uuidv4();

    createdAt = Date.now();
    updatedAt = Date.now();
});


describe('tasks reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            byId: {},
            allIds: []
        })
    });

    it('should handle ADD TASK', () => {
        const initialState = {
            byId: {},
            allIds: []
        };

        const nextState = {
            byId: {
                [taskId]: {
                    id: taskId,
                    title: 'new task',
                    description: '',
                    columnId,
                    createdAt,
                    updatedAt: null
                },
            },
            allIds: [taskId]
        };

        expect(reducer(initialState, {
            type: ADD_TASK,
            payload: {
                id: taskId,
                title: 'new task',
                description: '',
                columnId,
                createdAt,
            }
        })).toEqual(nextState)
    });

    it('should handle UPDATE TASK', () => {
        const initialState = {
            byId: {
                [taskId]: {
                    id: taskId,
                    title: 'new task',
                    description: '',
                    columnId,
                    createdAt,
                    updatedAt: null
                },
            },
            allIds: [taskId]
        };

        const nextState = {
            byId: {
                [taskId]: {
                    id: taskId,
                    title: 'updated new task',
                    description: 'description',
                    columnId,
                    createdAt,
                    updatedAt,
                },
            },
            allIds: [taskId]
        };

        expect(reducer(initialState, {
            type: UPDATE_TASK,
            payload: {
                taskId,
                title: 'updated new task',
                description: 'description',
                updatedAt,
            }
        })).toEqual(nextState)
    });

    it('should handle REMOVE TASK', () => {
        const initialState = {
            byId: {
                [taskId]: {
                    id: taskId,
                    title: 'new task',
                    description: '',
                    columnId,
                    createdAt,
                    updatedAt: null
                },
            },
            allIds: [taskId]
        };

        const nextState = {
            byId: {},
            allIds: []
        };

        expect(reducer(initialState, {
            type: REMOVE_TASK,
            payload: {
                taskId
            }
        })).toEqual(nextState)
    });

    it('should handle CHANGE COLUMN ID IN TASK', () => {
        const initialState = {
            byId: {
                [taskId]: {
                    id: taskId,
                    title: 'new task',
                    description: '',
                    columnId,
                    createdAt,
                    updatedAt: null
                },
            },
            allIds: [taskId]
        };

        const nextState = {
            byId: {
                [taskId]: {
                    id: taskId,
                    title: 'new task',
                    description: '',
                    columnId: columnId2,
                    createdAt,
                    updatedAt: null
                },
            },
            allIds: [taskId]
        };

        expect(reducer(initialState, {
            type: CHANGE_COLUMN_ID_IN_TASK,
            payload: {
                taskId,
                destColumnId: columnId2
            }
        })).toEqual(nextState)
    });
});