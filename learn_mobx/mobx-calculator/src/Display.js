import React, {Component} from 'react';
import {observer} from "mobx-react";
@observer class Display extends Component {

  render() {
    return (<div className="row">
      <div className="col-md-12 ">
        <div className="gradient">
          <input type="text" name="display" className="display" onBlur="this.focus()" value={this.props.store.displayString} autoFocus="autofocus"/></div>
        </div>
      </div>
      );
    }
}

export default Display;
