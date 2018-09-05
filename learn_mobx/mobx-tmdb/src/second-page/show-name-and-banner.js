import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function ShowNameAndBanner(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={40}>
        <Grid item xs={3}>
          <div className="show-image"><img src={`https://image.tmdb.org/t/p/w300/${props.showData.showPosterImage}`} /></div>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

ShowNameAndBanner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowNameAndBanner);
