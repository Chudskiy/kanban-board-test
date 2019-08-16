import reducer from "./columnsReducer"
import {
    ADD_COLUMN,
    ADD_TASK_TO_COLUMN,
    REMOVE_COLUMN,
    REMOVE_TASK_FROM_COLUMN, REORDER_TASKS_IN_COLUMN,
    UPDATE_COLUMN,
    UPDATE_TASK_POSITION_IN_COLUMN
} from "../actions/types";
import uuidv4 from 'uuid/v4'

let columnId;
let columnId2;
let taskId;

beforeEach(function () {
    columnId = uuidv4();
    columnId2 = uuidv4();
    taskId = uuidv4();
});


describe('columns reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            byId: {},
            allIds: []
        })
    });

    it('should handle ADD COLUMN', () => {
        const initialState = {
            byId: {},
            allIds: []
        };
        const nextState = {
            byId: {
                [columnId]: {
                    id: columnId,
                    title: 'new column',
                    tasks: [],
                }
            },
            allIds: [columnId]
        };

        expect(reducer(initialState, {
            type: ADD_COLUMN,
            payload: {
                id: columnId,
                title: 'new column'
            }
        })).toEqual(nextState)
    });

    it('should handle UPDATE COLUMN', () => {
        const initialState = {
            byId: {
                [columnId]: {
                    id: columnId,
                    title: 'new column',
                    tasks: [],
                }
            },
            allIds: [columnId]
        };

        const nextState = {
            byId: {
                [columnId]: {
                    id: columnId,
                    title: 'updated new column',
                    tasks: [],
                }
            },
            allIds: [columnId]
        };

        expect(reducer(initialState, {
            type: UPDATE_COLUMN,
            payload: {
                columnId,
                title: 'updated new column'
            }
        })).toEqual(nextState)
    });

    it('should handle REMOVE COLUMN', () => {
        const initialState = {
            byId: {
                [columnId]: {
                    id: columnId,
                    title: 'new column',
                    tasks: [],
                }
            },
            allIds: [columnId]
        };

        const nextState = {
            byId: {},
            allIds: []
        };

        expect(reducer(initialState, {
            type: REMOVE_COLUMN,
            payload: {
                columnId,
            }
        })).toEqual(nextState)
    });

    it('should handle ADD TASK TO COLUMN', () => {
        const initialState = {
            byId: {
                [columnId]: {
                    id: columnId,
                    title: 'new column',
                    tasks: [],
                }
            },
            allIds: [columnId]
        };

        const nextState = {
            byId: {
                [columnId]: {
                    id: columnId,
                    title: 'new column',
                    tasks: [taskId],
                }
            },
            allIds: [columnId]
        };

        expect(reducer(initialState, {
            type: ADD_TASK_TO_COLUMN,
            payload: {
                columnId,
                taskId,
            }
        })).toEqual(nextState)
    });

    it('should handle REMOVE TASK FROM COLUMN', () => {
        const initialState = {
            byId: {
                [columnId]: {
                    id: columnId,
                    title: 'new column',
                    tasks: [taskId],
                }
            },
            allIds: [columnId]
        };

        const nextState = {
            byId: {
                [columnId]: {
                    id: columnId,
                    title: 'new column',
                    tasks: [],
                }
            },
            allIds: [columnId]
        };

        expect(reducer(initialState, {
            type: REMOVE_TASK_FROM_COLUMN,
            payload: {
                columnId,
                taskId,
            }
        })).toEqual(nextState)
    });

    it('should handle UPDATE TASK POSITION IN COLUMN', () => {
        const initialState = {
            byId: {
                [columnId]: {
                    id: columnId,
                    title: 'new column',
                    tasks: [3, 4],
                },
                [columnId2]: {
                    id: columnId2,
                    title: 'new column 2',
                    tasks: [1, 2]
                }
            },
            allIds: [columnId]
        };

        const nextState = {
            byId: {
                [columnId]: {
                    id: columnId,
                    title: 'new column',
                    tasks: [4],
                },
                [columnId2]: {
                    id: columnId2,
                    title: 'new column 2',
                    tasks: [1, 2, 3],
                }
            },
            allIds: [columnId]
        };

        expect(reducer(initialState, {
            type: UPDATE_TASK_POSITION_IN_COLUMN,
            payload: {
                destColumnId: columnId2,
                sourceColumnId: columnId,
                tasks: {
                    [columnId]: [4],
                    [columnId2]: [1, 2, 3]
                }
            }
        })).toEqual(nextState)
    });

    it('should handle UPDATE TASK POSITION IN COLUMN', () => {
        const initialState = {
            byId: {
                [columnId]: {
                    id: columnId,
                    title: 'new column',
                    tasks: [3, 4],
                },
                [columnId2]: {
                    id: columnId2,
                    title: 'new column 2',
                    tasks: [1, 2]
                }
            },
            allIds: [columnId]
        };

        const nextState = {
            byId: {
                [columnId]: {
                    id: columnId,
                    title: 'new column',
                    tasks: [4],
                },
                [columnId2]: {
                    id: columnId2,
                    title: 'new column 2',
                    tasks: [1, 2, 3],
                }
            },
            allIds: [columnId]
        };

        expect(reducer(initialState, {
            type: UPDATE_TASK_POSITION_IN_COLUMN,
            payload: {
                destColumnId: columnId2,
                sourceColumnId: columnId,
                tasks: {
                    [columnId]: [4],
                    [columnId2]: [1, 2, 3]
                }
            }
        })).toEqual(nextState)
    });

    it('should handle REORDER TASK IN COLUMN', () => {
        const initialState = {
            byId: {
                [columnId]: {
                    id: columnId,
                    title: 'new column',
                    tasks: [1, 2, 3, 4],
                },
            },
            allIds: [columnId]
        };

        const nextState = {
            byId: {
                [columnId]: {
                    id: columnId,
                    title: 'new column',
                    tasks: [1, 3, 2, 4],
                },
            },
            allIds: [columnId]
        };

        expect(reducer(initialState, {
            type: REORDER_TASKS_IN_COLUMN,
            payload: {
                columnId,
                tasks: [1, 3, 2, 4]
            }
        })).toEqual(nextState)
    });
});