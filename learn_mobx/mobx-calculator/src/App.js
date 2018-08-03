import React, { Component } from 'react';
import Display from './Display'
import Keypad from './Keypad'
 class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card">
            <Display store={this.props.store}/>
            <Keypad store={this.props.store}/>
          </div>
          <div className="col-md-8">
            <h1 className="text-center vertical-align lg-font header-style">React Calculator</h1>
            <h3 className="text-center header-style">a simple calculator made with react and mobx</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
