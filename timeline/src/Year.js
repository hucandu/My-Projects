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
    let currentYear = this.props.currentYear
    if (flow === 'next') {
      this.props.updateYear(currentYear+1);
      this.setState({
        yearAnimationClass:"fadeInUp"
      })
    } else if (flow === 'prev') {
      this.props.updateYear(currentYear-1);
      this.setState({
        yearAnimationClass:"fadeOutUp"
      })
    }

    setTimeout(()=>{this.setState({yearAnimationClass:""})},250)
  }

  render() {
    return (<div className="carousel">
      <i className="carousel-button unselectable" data-flow="prev"  onClick={this.changeYear.bind(this)}>&#8249;</i>
      <h2 className={"selected-year "+this.state.yearAnimationClass}>{this.props.currentYear}</h2>
      <i className="carousel-button unselectable" data-flow="next"  onClick={this.changeYear.bind(this)}>&#8250;</i>
    </div>
      );
  }
}

export default Year;
