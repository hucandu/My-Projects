import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {observable} from "mobx";
const appState = observable({
   theatrePosters:[],
   mostPopularMovies:[],
   mostPopularTv:[],
   theatreBannerIsLoading:true
});

ReactDOM.render(<App store={appState} />, document.getElementById('root'));
