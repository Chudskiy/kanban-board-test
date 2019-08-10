import {combineReducers} from "redux";
import boardsReducer from "./reducers/boardsReducer";
import columnsReducer from "./reducers/columnsReducer";
import tasksReducer from "./reducers/tasksReducer";
import UIReducer from "./reducers/UIReducer";

export const rootReducer = combineReducers({
    boards: boardsReducer,
    columns: columnsReducer,
    tasks: tasksReducer,
    UI: UIReducer
});