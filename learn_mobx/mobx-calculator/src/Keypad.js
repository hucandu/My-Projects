import React, {Component} from 'react';
import {observer} from "mobx-react";

@observer class Keypad extends Component{

  performAction(action){
    console.log(action)
  }
  render(){
    return(
      <div>
      <div className="row no-gutters m-t-10">
    			<div className="col-md-3  text-center">
    				 <button className="button button-3d button-box  button-caution button-jumbo" onClick={(e)=>{this.performAction('AC')}}>AC</button>
    			</div>
    			<div className="col-md-3  text-center">
    				<button className="button button-3d button-box button-jumbo button-royal"><i className="fas fa-backspace" ></i></button>
    			</div>
    			<div className="col-md-3  text-center">
    				<button className="button button-3d button-box button-jumbo button-primary">÷</button>
    			</div>
    			<div className="col-md-3  text-center">
    				<button className="button button-3d button-box button-jumbo button-primary">x</button>
    			</div>
    		</div>
    		<div className="row no-gutters m-t-15" >
    			<div className="col-md-3  text-center">
    				 <button className="button button-3d button-box button-jumbo">9</button>
    			</div>
    			<div className="col-md-3  text-center">
    				<button className="button button-3d button-box button-jumbo">8</button>
    			</div>
    			<div className="col-md-3  text-center">
    				<button className="button button-3d button-box button-jumbo">7</button>
    			</div>
    			<div className="col-md-3  text-center">
    				<button className="button button-3d button-box button-jumbo button-primary">-</button>
    			</div>
    		</div>
    		<div className="row no-gutters m-t-15" >
    			<div className="col-md-3  text-center">
    				 <button className="button button-3d button-box button-jumbo">6</button>
    			</div>
    			<div className="col-md-3  text-center">
    				<button className="button button-3d button-box button-jumbo">5</button>
    			</div>
    			<div className="col-md-3  text-center">
    				<button className="button button-3d button-box button-jumbo">4</button>
    			</div>
    			<div className="col-md-3  text-center">
    				<button className="button button-3d button-box button-jumbo button-primary">+</button>
    			</div>
    		</div>
    		<div className="row no-gutters m-t-15" >
    			<div className="col-md-3  text-center">
    				 <button className="button button-3d button-box button-jumbo">3</button>
    			</div>
    			<div className="col-md-3  text-center">
    				<button className="button button-3d button-box button-jumbo">2</button>
    			</div>
    			<div className="col-md-3  text-center">
    				<button className="button button-3d button-box button-jumbo">1</button>
    			</div>
    			<div className="col-md-3  text-center">
    				<button className="button button-3d button-box button-jumbo button-royal equal-button" ><i className="fa fa-equals"></i></button>
    			</div>
    		</div>
    		<div className="row no-gutters m-t-15" >
    			<div className="col-md-3  text-center">
    				 <button className="button button-3d button-box button-jumbo button-primary">%</button>
    			</div>
    			<div className="col-md-3  text-center">
    				<button className="button button-3d button-box button-jumbo">0</button>
    			</div>
    			<div className="col-md-3  text-center">
    				<button className="button button-3d button-box button-jumbo button-primary">.</button>
    			</div>
    		</div>

</div>

    );
  }
}

export default Keypad;
