import React, {Component, Fragment} from 'react';
import {observer} from "mobx-react";
import {observable} from "mobx";
import Grid from '@material-ui/core/Grid';
import RecomendedImageGrid from './recomended-image-grid'

@observer class SimilarBinder extends Component {
  MovieList = []
  @observable keywordLength = 0;
  @observable MovieListFetched = false;
  constructor(props) {
    super(props)
  }

  getItems = () => {
    fetch(`https://api.themoviedb.org/3/${this.props.categoryType}/${this.props.itemID}/keywords?api_key=37385faf2d2e88f3611879acf84ec5dd`).then((res) => res.json()).then((jRes) => {
      this.props.categoryType === "movie" ?this.getItemsBykeyword(jRes.keywords[0].id):this.getItemsBykeyword(jRes.results[0].id)
    }).catch((e) => {
      console.log(e)
    })
  }

  getItemsBykeyword = (keyword, position) => {
    fetch(`https://api.themoviedb.org/3/keyword/${keyword}/movies?api_key=37385faf2d2e88f3611879acf84ec5dd&language=en-US&include_adult=false`).then((res) => res.json()).then((jRes) => {
      this.MovieList.push(jRes.results)
      this.MovieListFetched = true
    }).catch((e) => {
      console.log(e)
    })
  }

  render() {
    this.getItems()
    let selectiveMovieList = null
    if(this.MovieListFetched)
      { selectiveMovieList = this.MovieList[0].slice(1,5)}
    return (<Fragment>
      {this.MovieListFetched && <RecomendedImageGrid gridData = {selectiveMovieList}/>}
    </Fragment>)
  }
}

export default SimilarBinder;
