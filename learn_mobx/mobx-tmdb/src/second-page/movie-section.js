import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
const MovieSection = (props)=>{

  return(
    <Fragment>
      <h1 className="show-sub-heading" style={{marginTop:80}}>Synopsis</h1>
      <div className="line"></div>
      <div className="m-t-60 container">
        <Grid container={true} spacing={8}>
          <Grid item={true} xs={6}>
            <h2 className="show-genres">
              {props.showData.showOverview}
            </h2>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}


export default MovieSection
