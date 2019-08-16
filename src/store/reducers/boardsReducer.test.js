import reducer from "./boardsReducer"
import {ADD_BOARD, ADD_COLUMN_TO_BOARD, REMOVE_COLUMN_FROM_BOARD} from "../actions/types";
import uuidv4 from 'uuid/v4'

let boardId;
let columnId;

beforeEach(function () {
    boardId = uuidv4();
    columnId = uuidv4();
});


describe('boards reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            byId: {},
            allIds: []
        })
    });

    it('should handle ADD BOARD', () => {
        const initialState = {
            byId: {},
            allIds: []
        };

        const nextState = {
            byId: {
                [boardId]: {
                    id: boardId,
                    title: 'new board',
                    columns: [],
                }
            },
            allIds: [boardId]
        };

        expect(reducer(initialState, {
            type: ADD_BOARD,
            payload: {
                id: boardId,
                title: 'new board'
            }
        })).toEqual(nextState)
    });

    it('should handle ADD COLUMN TO BOARD', () => {
        const initialState = {
            byId: {
                [boardId]: {
                    id: boardId,
                    title: 'new board',
                    columns: [],
                }
            },
            allIds: [boardId]
        };

        const nextState = {
            byId: {
                [boardId]: {
                    id: boardId,
                    title: 'new board',
                    columns: [columnId],
                }
            },
            allIds: [boardId]
        };

        expect(reducer(initialState, {
            type: ADD_COLUMN_TO_BOARD,
            payload: {
                boardId,
                columnId,
            }
        })).toEqual(nextState)
    });

    it('should handle REMOVE COLUMN FROM BOARD', () => {
        const initialState = {
            byId: {
                [boardId]: {
                    id: boardId,
                    title: 'new board',
                    columns: [columnId],
                }
            },
            allIds: [boardId]
        };

        const nextState = {
            byId: {
                [boardId]: {
                    id: boardId,
                    title: 'new board',
                    columns: [],
                }
            },
            allIds: [boardId]
        };

        expect(reducer(initalState, {
            type: REMOVE_COLUMN_FROM_BOARD,
            payload: {
                boardId,
                columnId,
            }
        })).toEqual(nextState)
    });
});