import {combineReducers} from "redux";
import boardsReducer from "./reducers/boardsReducer";
import columnsReducer from "./reducers/columnsReducer";
import tasksReducer from "./reducers/tasksReducer";

export const rootReducer = combineReducers({
    boards: boardsReducer,
    columns: columnsReducer,
    tasks: tasksReducer,
});