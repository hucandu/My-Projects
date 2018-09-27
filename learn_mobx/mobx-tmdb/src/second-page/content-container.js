import React, {Component, Fragment} from 'react';
import UltimateAppBar from '../appbar';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {observer} from "mobx-react";
import {observable} from "mobx";
import ShowNameAndBanner from './show-name-and-banner';
import '../css/content-container.css';
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

const showData = observable({showBackdropImage: "", showPosterImage: "", showHeading: "", genres: ""});

@observer class ContentContainer extends Component {
  @observable fetchingData = true;
  componentDidMount() {
    this.fetchingData = true;
    let showType = this.props.match.params[0];
    let showID = this.props.match.params.id;
    fetch(`https://api.themoviedb.org/3/${showType}/${showID}?api_key=37385faf2d2e88f3611879acf84ec5dd&language=en-US`).then((response) => response.json()).then((rjson) => {
      console.log(rjson)
      showData.showBackdropImage = rjson.backdrop_path;
      showData.showPosterImage = rjson.poster_path;
      showData.showHeading = rjson.original_name
        ? rjson.original_name
        : rjson.original_title;
      showData.showOverview = rjson.overview;
      showData.genres = rjson.genres.map((data) => data.name).join("/")
      showData.release_date = rjson.release_date
        ? rjson.release_date.split("-")[0]
        : `${rjson.first_air_date.split("-")[0]} - ${rjson.last_air_date.split("-")[0]}`
      showData.vote_average = rjson.vote_average;
      showData.vote_count = rjson.vote_count;
      showData.popularity = rjson.popularity;
      showData.production_company = rjson.production_companies.map((data) => {
        if (data.logo_path)
          return data
      }).filter((data) => data !== undefined)
      this.fetchingData = false;
    }).catch((e) => console.log(e))
  }

  render() {
    return (<MuiThemeProvider theme={theme}>
      <UltimateAppBar/> {!this.fetchingData && <RenderOnLoad showData={showData}/>}
    </MuiThemeProvider>);
  }
}

const RenderOnLoad = (props) => {
  return (<Fragment>
    <div className="image-blur" style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.showData.showBackdropImage})`
      }}></div>
    <div className="content m-t-40">
      <ShowNameAndBanner showData={props.showData}/>
    </div>
  </Fragment>);
}

export default ContentContainer;
