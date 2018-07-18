import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {observer} from "mobx-react";
import {observable} from "mobx";
import TemperatureConverter from './temperatureConverter.js'

const appState = observable({
    count:0,
    increment:function(){
      this.count++;
    },
    decrement:function(){
      this.count--;
    }
});

@observer class Counter extends React.Component{


  handleIncrement = ()=>{
    this.props.store.increment();
  }

  handleDecrement = ()=>{
    if(! this.props.store.count <= 0){
      this.props.store.decrement();
    }
  }

  render(){
    return(
      <div>
        <div className="p-10">
          <p>counter:{this.props.store.count}</p>
          <button onClick={this.handleIncrement}>+</button>
          <button onClick={this.handleDecrement}>-</button>
        </div>
        <TemperatureConverter />
      </div>
    )
  }

}

ReactDOM.render(<Counter store={appState}/>, document.getElementById('root'));
