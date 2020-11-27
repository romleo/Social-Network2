import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider}from './StoreContext';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store = {store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));

}

rerenderEntireTree();
store.subscribe(() => {
    // let state = store.getState();
    rerenderEntireTree(state);
});

serviceWorker.unregister();
