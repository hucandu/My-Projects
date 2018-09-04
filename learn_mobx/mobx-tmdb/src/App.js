import React, {Component} from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Dashboard from './first-page/dashboard';
import ContentContainer from './second-page/content-container';
import "./index.css";
class App extends Component {
    render() {
        return (<BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Dashboard}/>
                <Route exact={true} path="/(movie|tv)/:id" component={ContentContainer}/>
            </Switch>
        </BrowserRouter>);
    }
}


export default App;
