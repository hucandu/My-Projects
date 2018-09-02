import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';
import Home from '@material-ui/icons/Home';
import LiveTv from '@material-ui/icons/LiveTv';
import Movie from '@material-ui/icons/Movie';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  },
  toolIcon: {
    flexGrow: 0.1
  },
  icons: {
    marginLeft: theme.spacing.unit * 1.5,
    marginRight: theme.spacing.unit * 1.5
  }

});

const UltimateAppBar = (props) => {
  const {classes} = props;
  return (<div className={classes.root}>
    <AppBar position="fixed" color="primary">
      <Toolbar variant="dense">
        <img src="/play.png" alt="iconImage" className="app-bar-icon"/>
        <h2 className="app-bar-heading">
          hucandu shows
        </h2>
        <div className={classes.toolIcon}>
          <IconButton className={classes.icons} color="inherit">
            <Home  color="secondary" style={{fontSize: 25}}/>
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <LiveTv  color="secondary" style={{fontSize: 25}}/>
          </IconButton>
          <IconButton  className={classes.icons} color="inherit">
            <Movie color="secondary" style={{fontSize: 25}}/>
          </IconButton>
        </div>
        <IconButton color="inherit">
          <Search style={{fontSize: 25}}/>
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>);
}

UltimateAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UltimateAppBar);
