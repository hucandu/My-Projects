import React, { Component } from 'react';
import Year from './Year.js'
import Month from './Month.js'
class App extends Component {

  constructor(){
    super();
      this.state = {currentYear: new Date().getFullYear(),yearAnimationClass:""}
      this.updateYear = this.updateYear.bind(this);
  }

  updateYear(newYear){
    console.log(newYear)
    this.setState({currentYear:newYear})
  }
  render() {
    return (
    <div>
      <Year currentYear={this.state.currentYear} updateYear={this.updateYear} />
      <Month />
    </div>
    );
  }
}

export default App;
