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
            "backspace": () => {
                this.props.store.displayString = this.props.store.displayString.slice(0, -1);
            },
            "plus": () => {
                if (!(/[+/x-]$/.test(this.props.store.displayString))) {

                    this.props.store.displayString += "+";
                }
            },
            "minus": () => {
                if (!(/[+/x-]$/.test(this.props.store.displayString))) {

                    this.props.store.displayString += "-";
                }
            },
            "division": () => {
                if (!(/[+/x-]$/.test(this.props.store.displayString))) {

                    this.props.store.displayString += "/";
                }
            },
            "decimal": () => {
                if (!(/d{0,}[.]d{0,}/.test(this.props.store.displayString.split(/[+/x-]/).slice(-1)))) {

                    this.props.store.displayString += ".";
                }

            },
            "multiply": () => {
              if(!(/[+/x-]$/.test(this.props.store.displayString))){

                this.props.store.displayString += "x";
              }
            },
            "equals":()=>{
              try{
                let result = eval(this.props.store.displayString);
                this.props.store.displayString = result.toString();
              }
              catch(e){
                this.props.store.displayString = "Invalid";
              }
            },
            "exponent":()=>{
              if(!(/[+/x-]$/.test(this.props.store.displayString))){
                this.props.store.displayString += "**"
              }
            }
        }
    }
    stackOperands(action) {

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
                            this.stackOperands('AC')
                        }}>AC</button>
                </div>
                <div className="col-md-3  text-center">
                    <button className="button button-3d button-box button-jumbo button-royal" onClick={(e) => {
                            this.stackOperands('backspace')
                        }}>
                        <i className="fas fa-backspace"></i>
                    </button>
                </div>
                <div className="col-md-3  text-center">
                    <button className="button button-3d button-box button-jumbo button-primary" onClick={(e) => {
                            this.stackOperands('division')
                        }}>÷</button>
                </div>
                <div className="col-md-3  text-center">
                    <button className="button button-3d button-box button-jumbo button-primary" onClick={(e) => {
                            this.stackOperands('multiply')
                        }}>x</button>
                </div>
            </div>
            <div className="row no-gutters m-t-15">
                <div className="col-md-3  text-center">
                    <button className="button button-3d button-box button-jumbo" onClick={(e) => {
                            this.stackOperands(9)
                        }}>9</button>
                </div>
                <div className="col-md-3  text-center">
                    <button className="button button-3d button-box button-jumbo" onClick={(e) => {
                            this.stackOperands(8)
                        }}>8</button>
                </div>
                <div className="col-md-3  text-center">
                    <button className="button button-3d button-box button-jumbo" onClick={(e) => {
                            this.stackOperands(7)
                        }}>7</button>
                </div>
                <div className="col-md-3  text-center">
                    <button className="button button-3d button-box button-jumbo button-primary" onClick={(e) => {
                            this.stackOperands('minus')
                        }}>-</button>
                </div>
            </div>
            <div className="row no-gutters m-t-15">
                <div className="col-md-3  text-center">
                    <button className="button button-3d button-box button-jumbo" onClick={(e) => {
                            this.stackOperands(6)
                        }}>6</button>
                </div>
                <div className="col-md-3  text-center">
                    <button className="button button-3d button-box button-jumbo" onClick={(e) => {
                            this.stackOperands(5)
                        }}>5</button>
                </div>
                <div className="col-md-3  text-center">
                    <button className="button button-3d button-box button-jumbo" onClick={(e) => {
                            this.stackOperands(4)
                        }}>4</button>
                </div>
                <div className="col-md-3  text-center">
                    <button className="button button-3d button-box button-jumbo button-primary" onClick={(e) => {
                            this.stackOperands('plus')
                        }}>+</button>
                </div>
            </div>
            <div className="row no-gutters m-t-15">
                <div className="col-md-3  text-center">
                    <button className="button button-3d button-box button-jumbo" onClick={(e) => {
                            this.stackOperands(3)
                        }}>3</button>
                </div>
                <div className="col-md-3  text-center">
                    <button className="button button-3d button-box button-jumbo" onClick={(e) => {
                            this.stackOperands(2)
                        }}>2</button>
                </div>
                <div className="col-md-3  text-center">
                    <button className="button button-3d button-box button-jumbo" onClick={(e) => {
                            this.stackOperands(1)
                        }}>1</button>
                </div>
                <div className="col-md-3  text-center">
                    <button className="button button-3d button-box button-jumbo button-royal equal-button" onClick={(e) => {
                            this.stackOperands('equals')
                        }}>
                        <i className="fa fa-equals"></i>
                    </button>
                </div>
            </div>
            <div className="row no-gutters m-t-15">
                <div className="col-md-3  text-center">
                    <button className="button  button-3d button-box button-jumbo button-primary " onClick={(e) => {
                            this.stackOperands('exponent')
                        }}  >e</button>
                </div>
                <div className="col-md-3  text-center">
                    <button className="button button-3d button-box button-jumbo" onClick={(e) => {
                            this.stackOperands(0)
                        }}>0</button>
                </div>
                <div className="col-md-3  text-center">
                    <button className="button button-3d button-box button-jumbo button-primary" onClick={(e) => {
                            this.stackOperands('decimal')
                        }}>.</button>
                </div>
            </div>

        </div>);
    }
}

export default Keypad;
