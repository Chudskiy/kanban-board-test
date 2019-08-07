import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/tailwind.css'
import {BrowserRouter} from "react-router-dom";
import {loadState, saveState} from "./localStorage";
import {createStore} from "redux";
import boardsReducer from "./store/reducers/boardsReducer";
import {Provider} from "react-redux";
import throttle from "lodash/throttle"


const persistedState = loadState();

const store = createStore(
    boardsReducer,
    persistedState
);

store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().todos
    });
}, 1000));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>;
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
