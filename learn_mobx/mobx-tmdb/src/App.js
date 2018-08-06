import React, {Component} from 'react';
import UltimateAppBar from './appbar';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import TheatreSlider from './theatreSlider';
import CategorySlider from './categorySlider';
import {observer} from "mobx-react";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#424242',
      light: '#6d6d6d',
      dark: '#1b1b1b',
      contrastText: '#fff'
    },
    secondary: {
      main: '#00a8e1',
      light: '#63daff',
      dark: '#0079af',
      contrastText: '#fff'
    }
  }
});

@observer class App extends Component {

  render() {
    return (<MuiThemeProvider theme={theme}>
      <UltimateAppBar />
      <TheatreSlider data={this.props.store}/>
      <h1 className="sub-heading">Most Popular</h1>
      <div className="line"></div>
      <div className="container">
        <CategorySlider/>
      </div>
    </MuiThemeProvider>);
  }
}

export default App;
