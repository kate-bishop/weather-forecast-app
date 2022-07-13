import React from 'react';
import { Grid, Typography } from '@mui/material'
import { location, date } from '../shared/mockstrings';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function LocationHeader() {
  return (
    <>
        <Grid container direction="row" alignItems="center" justifyContent="center">
          <LocationOnIcon />
          <Typography variant="h6">{location}</Typography>
        </Grid>
        <Typography variant="subtitle1">{date}</Typography>
    </>
  );
}

export default LocationHeader;
