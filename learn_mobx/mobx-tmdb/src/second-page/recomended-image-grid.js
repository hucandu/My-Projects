import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    height: 330,
  },
  subheader: {
    width: '100%',
  },
});


function RecomendedImageGrid(props) {
  const { classes } = props;

  return (
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {props.gridData.map((tile,position) => (
            <GridListTile key={position} cols={1.5}>
              <img src={`https://image.tmdb.org/t/p/w500${tile.poster_path}`}/>
            </GridListTile>
          ))}
        </GridList>
      </div>
  );
}

RecomendedImageGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecomendedImageGrid);
