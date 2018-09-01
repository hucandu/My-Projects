import React, {Component} from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Dashboard from './first-page/dashboard';
import "./index.css";
class App extends Component {
    render() {
        return (<BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Dashboard}/>
            </Switch>
        </BrowserRouter>);
    }
}


export default App;
