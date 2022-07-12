import React from 'react';
import '../shared/styles.scss';
import { Grid, Typography } from '@mui/material'
import { location, date } from '../shared/mockstrings';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function LocationHeader() {
  return (
    <div className="header">
        <Grid container direction="row" alignItems="center" justifyContent="center">
          <LocationOnIcon />
          <Typography variant="h6">{location}</Typography>
        </Grid>
        <Typography variant="subtitle1">{date}</Typography>
    </div>
  );
}

export default LocationHeader;
