// import {ADD_COLUMN} from "../actions/types";
import uuidv4 from "uuid/v4"

const initialState = [
    {
        id: uuidv4(),
        title: 'test',
        columns: []
    }
];
//     boards: [
//         {
//             id: uuidv4(),
//             title: 'test',
//             columns: []
//         }
//     ]
// };

const boardsReducer = (state = initialState, action) => {
    // console.log('Reducer state = ', state);


    switch (action.type) {
        // case ADD_COLUMN:
        //     console.log(getBoard(action.payload.boardId, state.boards));
        //     const {boardId, id, title} = action.payload;
        //
        //     const updatedColumns = [...getBoard(boardId, state.boards)];
        //
        //     updatedColumns.push({id, title});
        //     return {
        //         ...state,
        //         ...state.boards
        //     };
        default:
            return state;
    }
};

//
// const getBoard = (boardId, boards) => {
//     return boards.find((board, index) => {
//         console.log('Func', board, boardId);
//         return board.id === boardId
//     })
// };
//
// const getColumns = (board) => {
//
// };

export default boardsReducer;