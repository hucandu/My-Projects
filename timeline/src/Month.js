import React from 'react'

class Month extends React.Component {
  constructor() {
    super();
    this.selectMonth = this.selectMonth.bind(this)
    this.state = {AnimationClass:[]}
  }

  selectMonth(position,event){
    let animationClassList = []
    for (let i=0;i<12;i++){
      animationClassList.push("")
    }
    animationClassList[position]="fill_color animation_forward"
    this.setState({AnimationClass:animationClassList})
  }

  render() {
    let month_names = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]

    const createMonthList = () => {
      let month_list=[];
      for (let i in month_names) {
        month_list.push(<li className={"month "+this.state.AnimationClass[i]} key = {i} onClick={this.selectMonth.bind(this,i)}>{month_names[i]}</li>)
      }
      return month_list;
    }
    return (<ul className="month-list">
        {createMonthList()}
    </ul>);
  }
}
export default Month;
