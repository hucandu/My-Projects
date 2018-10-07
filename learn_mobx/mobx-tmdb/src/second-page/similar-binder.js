import React, {Component, Fragment} from 'react';
import {observer} from "mobx-react";
import {observable} from "mobx";
import Grid from '@material-ui/core/Grid';

@observer class SimilarBinder extends Component{
  constructor(props) {
    super(props)
  }

  getItems = ()=>{
    fetch(`https://api.themoviedb.org/3/${this.props.categoryType}/${this.props.itemID}/keywords?api_key=37385faf2d2e88f3611879acf84ec5dd`)
    .then((res)=>res.json())
    .then((jRes)=>{
      jRes.keywords.forEach(({id,name},position)=>this.getItemsBykeyword(id))
    }).catch((e)=>{
      console.log(e)
    })
  }

  getItemsBykeyword = (keyword,position)=>{
    fetch(`https://api.themoviedb.org/3/keyword/${keyword}/movies?api_key=37385faf2d2e88f3611879acf84ec5dd&language=en-US&include_adult=false`)
    .then((res)=>res.json())
    .then((jRes)=>{
      console.log(jRes)
    }).catch((e)=>{
      console.log(e)
    })
  }


  render(){
    return(<Fragment>
      <Grid container={true} spacing={8}>
        <Grid item={true} xs={6}>
          <img width="50%" src="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"></img>
        </Grid>
        <Grid item={true} xs={6}>
          <img width="50%" src="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"></img>
        </Grid>
      </Grid>
    </Fragment>)
  }
}


export default SimilarBinder;
