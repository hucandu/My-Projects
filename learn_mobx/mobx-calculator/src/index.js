import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './buttons.css';
import App from './App';
import {observable} from "mobx";
const appState = observable({displayString:""})
ReactDOM.render(<App store={appState}/>, document.getElementById('root'));
