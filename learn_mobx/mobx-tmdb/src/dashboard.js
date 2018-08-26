import React, {Component} from 'react';
import UltimateAppBar from './appbar';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import TheatreSlider from './theatreSlider';
import CategorySlider from './categorySlider';
import {observer} from "mobx-react";
import {observable} from "mobx";

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

const appState = observable({
   theatrePosters:[],
   mostPopularMovies:[],
   mostPopularTv:[],
   theatreBannerIsLoading:true
});

@observer class Dashboard extends Component {

  render() {
    return (<MuiThemeProvider theme={theme}>
      <UltimateAppBar />
      <TheatreSlider data={appState}/>
      <h1 className="sub-heading">Most Popular</h1>
      <div className="line"></div>
      <div className="container">
        <CategorySlider/>
      </div>
    </MuiThemeProvider>);
  }
}

export default Dashboard;
