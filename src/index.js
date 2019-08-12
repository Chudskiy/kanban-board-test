import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import './assets/css/tailwind.css'
import {BrowserRouter} from "react-router-dom";
import {loadState, saveState} from "./localStorage";
import {createStore} from "redux";
import {Provider} from "react-redux";
import throttle from "lodash/throttle"
import {rootReducer} from "./store";

const persistedState = loadState();

const store = createStore(
    rootReducer,
    persistedState
);

store.subscribe(throttle(() => {
    saveState({
        boards: store.getState().boards,
        columns: store.getState().columns,
        tasks: store.getState().tasks,
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
