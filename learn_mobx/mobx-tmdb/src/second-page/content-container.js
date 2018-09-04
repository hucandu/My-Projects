import React, {Component} from 'react';
import UltimateAppBar from '../appbar';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {observer} from "mobx-react";
import {observable} from "mobx";
import '../css/content-container.css'
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

const showData = observable({showBackdropImage: ""});

@observer class ContentContainer extends Component {
  @observable fetchingData = true;
  componentDidMount() {
    this.fetchingData = true;
    let showType = this.props.match.params[0];
    let showID = this.props.match.params.id;
    fetch(`https://api.themoviedb.org/3/${showType}/${showID}?api_key=37385faf2d2e88f3611879acf84ec5dd&language=en-US`).then((response) => response.json()).then((rjson) => {
      showData.showBackdropImage = rjson.backdrop_path;
      this.fetchingData = false;
    }).catch((e) => console.log(e))
  }

  render() {
    return (<MuiThemeProvider theme={theme}>
      <UltimateAppBar/>
      {!this.fetchingData && <RenderOnLoad showData={showData}/>}
    </MuiThemeProvider>);
  }
}

const RenderOnLoad = (props) => {
  return(  <div>
      <div className="image-blur" style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.showData.showBackdropImage})`
        }}></div>
      <div className="container-fluid content"></div>
    </div>);
}

export default ContentContainer;
