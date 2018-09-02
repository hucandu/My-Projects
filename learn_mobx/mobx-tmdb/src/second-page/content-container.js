import React, {Component} from 'react';
import UltimateAppBar from './appbar';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
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
  theatrePosters: [],
  mostPopular:{movie:[],tv:[]},
  theatreBannerIsLoading: true,
});

@observer class ContentContainer extends Component {

  render() {
    return (<MuiThemeProvider theme={theme}>
      <h3>{this.props.match.params.redirectParam}</h3>
    </MuiThemeProvider>);
  }
}

export default ContentContainer;
