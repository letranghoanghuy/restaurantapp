import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { StateProvider } from './context/stateProvider';
import { initialState } from './context/initialState';
import reducer from './context/reducer';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <StateProvider initialState={initialState} reducer={reducer} >
            <App />
        </StateProvider>
    </Router>,
    document.getElementById("root"));