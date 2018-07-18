import React from 'react';
import ReactDOM from 'react-dom';
import {observer} from "mobx-react";
import {observable,computed} from "mobx";
import './index.css';

@observer class TemperatureConverter extends React.Component{

  @observable temp = 0;
  @observable unit = 'C';

  @computed get currentTemp(){
    return this.temp;
  }


  @computed get convertedTemp(){

    if(this.unit === 'C'){
      return (this.temp-32)/1.8;
    }
  }

  handleChange = (event)=>{

      this.temp = parseInt(event.target.value);

  }

  handleClick = ()=>{
    console.log(this.convertedTemp)
    this.temp = this.convertedTemp;
  }

  render(){
    return(
      <div className="p-10">
      <input type="number" value={this.currentTemp} onChange={this.handleChange} />{this.unit}
      <button  onClick={this.handleClick}>Celsius</button>
      <button>Farhenite</button>
      </div>
    )
  }
}

export default TemperatureConverter;
