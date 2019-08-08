import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/tailwind.css'
import {BrowserRouter} from "react-router-dom";
import {loadState, saveState} from "./localStorage";
import {combineReducers, createStore} from "redux";
import boardsReducer from "./store/reducers/boardsReducer";
import {Provider} from "react-redux";
import throttle from "lodash/throttle"
import columnsReducer from "./store/reducers/columnsReducer";
import tasksReducer from "./store/reducers/tasksReducer";


const persistedState = loadState();

const rootReducer = combineReducers({
    boards: boardsReducer,
    columns: columnsReducer,
    tasks: tasksReducer,
});

const store = createStore(
    rootReducer,
    persistedState
);

store.subscribe(throttle(() => {
    // console.log('Store get state = ', store.getState());
    saveState({
        boards: store.getState().boards,
        columns: store.getState().columns
    });
}, 1000));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
