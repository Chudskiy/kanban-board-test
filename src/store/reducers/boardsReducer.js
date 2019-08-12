import produce from "immer";
import {handleActions} from 'redux-actions'

const initialState = {
    byId: {},
    allIds: []
};

const add_board = (state, action) => {
    const {id, title} = action.payload;

    const newBoard = {
        id,
        title,
        columns: []
    };

    console.log(newBoard);

    return produce(state, draft => {
        draft.byId[id] = newBoard;
        draft.allIds.push(id);
    });
};

const add_column_to_board = (state, action) => {
    const {columnId, boardId} = action.payload;

    return produce(state, draft => {
        draft.byId[boardId].columns.push(columnId);
    });
};

const remove_column_from_board = (state, action) => {
    const {columnId, boardId} = action.payload;

    const updatedColumns = state.byId[boardId].columns.filter(column => {
        return columnId !== column
    });

    return produce(state, draft => {
        draft.byId[boardId].columns = updatedColumns;
    });
};

const boardsReducer = handleActions(
    {
        add_board,
        add_column_to_board,
        remove_column_from_board
    },
    initialState
);

export default boardsReducer;