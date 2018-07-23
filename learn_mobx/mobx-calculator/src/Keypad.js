import React, {Component} from 'react';
import {observer} from "mobx-react";
import {computed} from "mobx";

@observer class Keypad extends Component {
  set AC(value) {
    debugger;
    this.props.store.displayString = value;
  }
   operations = () => {
    return {
      "AC": () => {
        this.props.store.displayString = "";
      },
      "backspace":()=>{
        this.props.store.displayString = this.props.store.displayString.slice(0,-1);
      },
      "plus":()=>{
        this.props.store.displayString += "+";
      },
      "minus":()=>{
        this.props.store.displayString += "-";
      },
      "division":()=>{
        this.props.store.displayString += "/";
      },
      "decimal":()=>{
        this.props.store.displayString += ".";
      },
      "multiply":()=>{
        this.props.store.displayString += "x";
      }
    }
  }
  performAction(action) {

    if (isNaN(action)) {
      this.operations()[action]();

    } else {
      this.props.store.displayString += action;
    }

  }
  render() {
    return (<div>
      <div className="row no-gutters m-t-10">
        <div className="col-md-3  text-center">
          <button className="button button-3d button-box  button-caution button-jumbo" onClick={(e) => {
              this.performAction('AC')
            }}>AC</button>
        </div>
        <div className="col-md-3  text-center">
          <button className="button button-3d button-box button-jumbo button-royal" onClick={(e) => {
              this.performAction('backspace')
            }}>
            <i className="fas fa-backspace"></i>
          </button>
        </div>
        <div className="col-md-3  text-center">
          <button className="button button-3d button-box button-jumbo button-primary" onClick={(e) => {
              this.performAction('division')
            }}>÷</button>
        </div>
        <div className="col-md-3  text-center">
          <button className="button button-3d button-box button-jumbo button-primary" onClick={(e) => {
              this.performAction('multiply')
            }}>x</button>
        </div>
      </div>
      <div className="row no-gutters m-t-15">
        <div className="col-md-3  text-center">
          <button className="button button-3d button-box button-jumbo" onClick={(e) => {
              this.performAction(9)
            }}>9</button>
        </div>
        <div className="col-md-3  text-center">
          <button className="button button-3d button-box button-jumbo" onClick={(e) => {
              this.performAction(8)
            }}>8</button>
        </div>
        <div className="col-md-3  text-center">
          <button className="button button-3d button-box button-jumbo" onClick={(e) => {
              this.performAction(7)
            }}>7</button>
        </div>
        <div className="col-md-3  text-center">
          <button className="button button-3d button-box button-jumbo button-primary" onClick={(e) => {
              this.performAction('minus')
            }}>-</button>
        </div>
      </div>
      <div className="row no-gutters m-t-15">
        <div className="col-md-3  text-center">
          <button className="button button-3d button-box button-jumbo" onClick={(e) => {
              this.performAction(6)
            }}>6</button>
        </div>
        <div className="col-md-3  text-center">
          <button className="button button-3d button-box button-jumbo" onClick={(e) => {
              this.performAction(5)
            }}>5</button>
        </div>
        <div className="col-md-3  text-center">
          <button className="button button-3d button-box button-jumbo" onClick={(e) => {
              this.performAction(4)
            }}>4</button>
        </div>
        <div className="col-md-3  text-center">
          <button className="button button-3d button-box button-jumbo button-primary" onClick={(e) => {
              this.performAction('plus')
            }}>+</button>
        </div>
      </div>
      <div className="row no-gutters m-t-15">
        <div className="col-md-3  text-center">
          <button className="button button-3d button-box button-jumbo" onClick={(e) => {
              this.performAction(3)
            }}>3</button>
        </div>
        <div className="col-md-3  text-center">
          <button className="button button-3d button-box button-jumbo" onClick={(e) => {
              this.performAction(2)
            }}>2</button>
        </div>
        <div className="col-md-3  text-center">
          <button className="button button-3d button-box button-jumbo" onClick={(e) => {
              this.performAction(1)
            }}>1</button>
        </div>
        <div className="col-md-3  text-center">
          <button className="button button-3d button-box button-jumbo button-royal equal-button" onClick={(e) => {
              this.performAction('equals')
            }}>
            <i className="fa fa-equals"></i>
          </button>
        </div>
      </div>
      <div className="row no-gutters m-t-15">
        <div className="col-md-3  text-center">
          <button className="button button-3d button-box button-jumbo button-primary" onClick={(e) => {
              this.performAction('percent')
            }}>%</button>
        </div>
        <div className="col-md-3  text-center">
          <button className="button button-3d button-box button-jumbo" onClick={(e) => {
              this.performAction(0)
            }}>0</button>
        </div>
        <div className="col-md-3  text-center">
          <button className="button button-3d button-box button-jumbo button-primary" onClick={(e) => {
              this.performAction('decimal')
            }}>.</button>
        </div>
      </div>

    </div>);
  }
}

export default Keypad;
