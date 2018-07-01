import React from 'react'

class Year extends React.Component {
  constructor() {
    super();
    this.state = {
      currentYear: new Date().getFullYear(),
      yearAnimationClass:""
    }
    this.changeYear = this.changeYear.bind(this);

  }


  changeYear(e) {
    let flow = e.target.getAttribute('data-flow');
    let currentState = {
      ...this.state
    }
    if (flow === 'next') {
      this.setState({
        currentYear: ++currentState.currentYear,
        yearAnimationClass:"fadeInUp"
      })
    } else if (flow === 'prev') {
      this.setState({
        currentYear: --currentState.currentYear,
        yearAnimationClass:"fadeInDown"
      })
    }

    setTimeout(()=>{this.setState({yearAnimationClass:""})},250)
  }

  render() {
    return (<div className="carousel">
      <i className="carousel-button unselectable" data-flow="prev"  onClick={this.changeYear.bind(this)}>&#8249;</i>
      <h2 className={"selected-year "+this.state.yearAnimationClass}>{this.state.currentYear}</h2>
      <i className="carousel-button unselectable" data-flow="next"  onClick={this.changeYear.bind(this)}>&#8250;</i>
    </div>
      );
  }
}

export default Year;
