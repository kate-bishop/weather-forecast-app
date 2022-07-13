import React from 'react';
import { Grid, Typography } from '@mui/material'
import { location, date } from '../shared/mockstrings';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function LocationHeader() {
  return (
    <div className='location'>
      <Grid container direction="row" alignItems="center" justifyContent="center">
        <Grid item>
          <LocationOnIcon fontSize="small" style={{ marginRight: '.25rem' }} />
        </Grid>
        <Grid item>
          <Typography variant="h6">{location}</Typography>
        </Grid>
      </Grid>
      <Typography variant="body2">{date}</Typography>
    </div>
  );
}

export default LocationHeader;
