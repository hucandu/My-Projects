import React, { Component } from 'react';
import Display from './Display'
import Keypad from './Keypad'
 class App extends Component {
  render() {
    return (
      <div className="container card ">
        <Display store={this.props.store}/>
        <Keypad store={this.props.store}/>
      </div>
    );
  }
}

export default App;
