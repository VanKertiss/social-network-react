import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/reduxStore';
import SamuraiJSApp from "./App";

ReactDOM.render(
    <SamuraiJSApp state={store.getState()} dispatch={store.dispatch}/>,

    document.getElementById('root')
);


