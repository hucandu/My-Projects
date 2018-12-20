import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import SimilarBinder from '../second-page/similar-binder'
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 1,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },card:{
     maxWidth: 150,
     margin:"auto"
  }
});

function ShowNameAndBanner(props) {

  const {classes} = props;

  return (<div className={classes.root} style={{
      marginLeft: 40,
      marginRight: 40
    }}>
    <Grid container={true} spacing={40}>
      <Grid item={true} xl={2} lg={3}>
        <div className="show-image"><img alt="none" src={`https://image.tmdb.org/t/p/w300/${props.showData.showPosterImage}`}/></div>
      </Grid>
      <Grid item={true} xl={8} lg={6}>
        <h1 className="show-heading">
          {props.showData.showHeading}
        </h1>
        <h2 className="m-t-20 show-date">{props.showData.release_date}</h2>
        <h2 className="show-genres">
          {props.showData.genres}
        </h2>
        <Grid container={true} spacing={8}>
          <Grid item={true} xs={4}>
            <div className="icon-and-rating">
              <img alt="none" src="/popularity.png"></img>
              <h3>{props.showData.popularity}</h3>
            </div>
            <div className="icon-and-rating">
              <img alt="none" src="/IMDb_logo.svg"></img>
              <h3>{props.showData.vote_average}</h3>
            </div>
            <div className="icon-and-rating">
              <img alt="none" src="/like.png"></img>
              <h3>{props.showData.vote_count}</h3>
            </div>
          </Grid>
          <Grid item={true} xs={8}>
            <div className="production-and-banner">
              {
                props.showData.production_company.length > 0 &&< React.Fragment > <h3>{`Production - ${props.showData.production_company[0].name}`}</h3>
              <Card className={classes.card}><img alt="none"src={`https://image.tmdb.org/t/p/w300${props.showData.production_company[0].logo_path}`}></img></Card> < /React.Fragment>}
            </div>
          </Grid>
        </Grid>

      </Grid>
      <Grid item={true} lg={3} xl={2} >
        <Paper className={classes.paper}><SimilarBinder categoryType={props.showType} itemID={props.showID}/></Paper>
      </Grid>
    </Grid>
  </div>);
}

ShowNameAndBanner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ShowNameAndBanner);
