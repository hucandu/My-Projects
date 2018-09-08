import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 1,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

function ShowNameAndBanner(props) {
  const {classes} = props;

  return (<div className={classes.root} style={{marginLeft:40,marginRight:40}}>
    <Grid container={true} spacing={40}>
      <Grid item={true} xs={3}>
        <div className="show-image"><img src={`https://image.tmdb.org/t/p/w300/${props.showData.showPosterImage}`}/></div>
      </Grid>
      <Grid item={true} xs={6}>
          <h1 className="show-heading">
          {props.showData.showHeading}
        </h1>
      </Grid>
      <Grid item={true} xs={3}>
        <Paper className={classes.paper}>xs=3</Paper>
      </Grid>
    </Grid>
  </div>);
}

ShowNameAndBanner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ShowNameAndBanner);
